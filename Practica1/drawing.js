(() => {

    let mouse = {
        x: 0,
        y: 0
    };

    let ppts = [];
    let tool;
    const tool_default = 'pencil';
    let tools = {};

    const canvas = window.document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const sketch = window.document.getElementById('sketch');
    const sketch_style = getComputedStyle(sketch);
    const tmp_canvas = window.document.createElement('canvas');
    const tmp_ctx = tmp_canvas.getContext('2d');

    canvas.width = parseInt(sketch_style.getPropertyValue('width'));
    canvas.height = parseInt(sketch_style.getPropertyValue('height'));


    let slider = new Slider('#ex1', {
        formatter: value => {
            tmp_ctx.lineWidth = value;
            return 'Grosor de linea: ' + value;
        }
    })

    //Lienzo temporal
    tmp_canvas.id = 'tmp_canvas';
    tmp_canvas.width = canvas.width;
    tmp_canvas.height = canvas.height;

    sketch.appendChild(tmp_canvas);

    tools.pencil = function () {
        const tool = this;
        this.started = false;


        this.mousedown = mouse => {
            onPaint(mouse);
            tool.started = true;
        };

        this.mousemove = mouse => {
            if (tool.started) {
                tmp_ctx.lineTo(mouse.offsetX, mouse.offsetY);
                tmp_ctx.stroke();
            }
        }

        this.mouseup = mouse => {
            if (tool.started) {
                //tool.mousemove(mouse);
                tool.started = false;
                ctx.drawImage(tmp_canvas, 0, 0);

                tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);

                ppts = [];
            }
        };

        let onPaint = mouse =>  {
            ppts.push({
                x: mouse.offsetX,
                y: mouse.offsetY
            });
            console.log(ppts.length);
            if (ppts.length < 3) {
                let b = ppts[0];
                tmp_ctx.beginPath();
                tmp_ctx.arc(b.x, b.y, tmp_ctx.lineWidth / 2, 0, Math.PI * 2, !0);
                tmp_ctx.fill();
                tmp_ctx.closePath();
                return;
            }

            tmp_ctx.clearRect(0, 0, canvas.width, canvas.height);
            tmp_ctx.beginPath();
            tmp_ctx.moveTo(ppts[0].x, ppts[0].y);

            for (var i = 1; i < ppts.length - 2; i++) {
                let c = (ppts[i].x + ppts[i + 1].x) / 2;
                let d = (ppts[i].y + ppts[i + 1].y) / 2;

                tmp_ctx.quadraticCurveTo(ppts[i].x, ppts[i].y, c, d);
            }

            tmp_ctx.quadraticCurveTo(
                ppts[i].x,
                ppts[i].y,
                ppts[i + 1].x,
                ppts[i + 1].y
            );
            tmp_ctx.stroke()

        };
    };

    tools.rectangle = function () {
        const tool = this;
        this.started = false;

        this.mousedown = mouse => {
            tool.started = true;
            tool.x0 = mouse.offsetX;
            tool.y0 = mouse.offsetY;
        };

        this.mousemove = mouse => {
            if (!tool.started) {
                return;
            }

            let x = Math.min(mouse.offsetX, tool.x0),
                y = Math.min(mouse.offsetY, tool.y0),
                w = Math.abs(mouse.offsetX - tool.x0),
                h = Math.abs(mouse.offsetY - tool.y0);

            tmp_ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (!w || !h) {
                return;
            }

            tmp_ctx.strokeRect(x, y, w, h);
        };

        this.mouseup = mouse => {
            if (tool.started) {
                //tool.mousemove(mouse);
                tool.started = false;
                ctx.drawImage(tmp_canvas, 0, 0);

                tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
            }
        };
    };

    tools.line = function () {
        const tool = this;
        this.started = false;

        this.mousedown = mouse => {
            tool.started = true;
            tool.x0 = mouse.offsetX;
            tool.y0 = mouse.offsetY;
        };

        this.mousemove = mouse => {
            if (!tool.started) {
                return;
            }

            tmp_ctx.clearRect(0, 0, canvas.width, canvas.height);

            tmp_ctx.beginPath();
            tmp_ctx.moveTo(tool.x0, tool.y0);
            tmp_ctx.lineTo(mouse.offsetX, mouse.offsetY);
            tmp_ctx.stroke();
            tmp_ctx.closePath();
        };

        this.mouseup = mouse => {
            if (tool.started) {
                tool.started = false;
                ctx.drawImage(tmp_canvas, 0, 0);

                tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
            }
        };
    };

    tools.circle = function ()  {
        const tool = this;
        this.started = false;

        this.mousedown = mouse => {
            tool.started = true;
            tool.x0 = mouse.offsetX;
            tool.y0 = mouse.offsetY;
        };

        this.mousemove = mouse =>  {
            if (!tool.started) {
                return;
            }
            tmp_ctx.clearRect(0, 0, canvas.width, canvas.height);
            tmp_ctx.beginPath();
            tmp_ctx.moveTo(tool.x0, tool.y0 + (mouse.offsetY - tool.y0) / 2);
            tmp_ctx.bezierCurveTo(tool.x0, tool.y0, mouse.offsetX, tool.y0, mouse.offsetX, tool.y0 + (mouse.offsetY - tool.y0) / 2);
            tmp_ctx.bezierCurveTo(mouse.offsetX, mouse.offsetY, tool.x0, mouse.offsetY, tool.x0, tool.y0 + (mouse.offsetY - tool.y0) / 2);
            tmp_ctx.stroke();
            tmp_ctx.closePath();
        };

        this.mouseup = () => {
            if (tool.started) {
                ctx.drawImage(tmp_canvas, 0, 0);
                tool.started = false;
                tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
            }

        };
    };


    selFigure.addEventListener('change', ev_tool_change, false);

    color.addEventListener('change', () => {
        tmp_ctx.strokeStyle = color.value;
    }, false);

    button.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, false);

    tmp_canvas.addEventListener('mousedown', ev_canvas, false);
    tmp_canvas.addEventListener('mousemove', ev_canvas, false);
    tmp_canvas.addEventListener('mouseup', ev_canvas, false);
    tmp_canvas.addEventListener('mouseout', ev_canvas, false);

    function ev_tool_change(ev) {
        if (tools[ev.target.value]) {
            tool = new tools[ev.target.value]();
        }
    }

    function ev_canvas(e) {
        let func = tool[e.type];
        if (func) {
            func(e);
        }
    }

    if (tools[tool_default]) {
        tool = new tools[tool_default]();
        selFigure.value = tool_default;
    }

})();
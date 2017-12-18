const controller = (() => {
    let str;
    let service;
    let alphabet;
    let hint;
    let guesses;
    let lives;
    let counter;
    let space;
    let myButtons;
    let wordHolder;
    let myLives;
    let word;
    let myStickman;
    let ctx;
    let drawArray;
    let nameUsers;
    let button;

    const constructor = (service) => {
        this.service = service;
        this.myStickman = document.getElementById("canvasStickman");
        this.ctx = this.myStickman.getContext('2d');
        this.alphabet = alphabetArray;
        this.guesses = [];
        this.drawArray = drawArrayCanvas;
        this.nameUsers = document.getElementById('txtUser');
        this.lives = 10;
        this.counter = 0;
        this.space = 0;
        this.wordHolder = document.getElementById('hold');
        this.myButtons = document.getElementById('divButtons');
        this.myLives = document.getElementById('myLives');
        this.button = document.getElementById('butLogin');

        //console.log(this.service.hola());
        this.service.hiddenHTML(document.getElementById('canvasStickman'), document.getElementById('myLives'));

        ConnectionDB();
    }

    const ConnectionDB = () => {
        this.button.addEventListener('click', () => {
            ajax({
                type: 'POST',
                url: 'palabras.php',
                parse: true,
                data : {
                    "action": "register",
                    "name": this.nameUsers.value
                }
            }).then((data) => {
                console.log(data);
                str = data.palabra;
                console.log(str);
                data.palabra == null ? alert("No existe usuario") : (result(), buttons(), 
                this.service.visibleHTML(document.getElementById('canvasStickman'), document.getElementById('myLives'),
                document.getElementById('butLogin'), document.getElementById('txtUser')));
            }).catch((error) => {
                console.log(error);
            });
        });
    }

    const buttons = () => {
        let letters = document.createElement('ul');
        letters.setAttribute('class', 'ulListButtons');
        this.myButtons.appendChild(letters);

        Array.from(this.alphabet, content => {
            let list = document.createElement('li');
            list.id = 'letter';
            list.setAttribute('class', 'letters');
            list.innerHTML = content;
            check(list);
            letters.appendChild(list);
        });
    }

    const check = (list) => {
        let self = this;

        list.onclick = function (e) {
            let guess = e.target.innerHTML;
            e.target.setAttribute('class', 'desactivate');
            e.target.disable = true;
            e.target.onclick = null;
            //console.log(guess);
            Array.from(self.word, (content,index) => {
               content === guess ? (self.guesses[index].innerHTML = guess, self.counter += 1) : ""
            });

            let j = (self.word.indexOf(guess));
            j === -1 ? (self.lives -= 1, comments(), animate()) : comments();
        }
    }

    const result = () => {
        let correct = document.createElement('ul');
        correct.setAttribute('class', 'ulList');
        this.word = str.replace(/\s/g, "-");
        this.wordHolder.appendChild(correct);

        Array.from(this.word, content => {
            correct.setAttribute('id', 'my-word');
            let guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            console.log(content);

            content === "-" ? (guess.innerHTML = "-", this.space = 1) : guess.innerHTML = "_";
            this.guesses.push(guess);
            correct.appendChild(guess);
        });
    }

    const comments = () => {
        this.myLives.innerHTML = `Tienes ${this.lives} vidas`;
        this.lives < 1 ? (this.myLives.innerHTML = "Has perdido", desactivateButtonsLetters(), setTimeout(function(){ location.reload(); }, 3000)) : "";

        Array.from(this.guesses, () => {
            this.sumCounterSpace = this.counter + this.space;
            this.sumCounterSpace === this.guesses.length ? (this.myLives.innerHTML = "Lo has logrado", desactivateButtonsLetters(), setTimeout(function(){ location.reload(); }, 3000)) : "";
        });

    }

    const desactivateButtonsLetters = () => {
        let listNodes = this.myButtons.childNodes[0].childNodes;

        Array.from(listNodes, (content, index) => {
            listNodes[index].setAttribute('class', 'desactivate');
        });

    }

    const animate = () => {
        var drawMe = this.lives;
        this.drawArray[drawMe]();
    }

    const canvas = () => {
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#fff";
        this.ctx.lineWidth = 2;
    };

    const draw = ($pathFromx, $pathFromy, $pathTox, $pathToy) => {
        this.ctx.moveTo($pathFromx, $pathFromy);
        this.ctx.lineTo($pathTox, $pathToy);
        this.ctx.stroke();
    }

    const head = () => {
        this.ctx.beginPath();
        this.ctx.arc(60, 25, 10, 0, Math.PI * 2, true);
        this.ctx.stroke();
    }

    const frame1 = () => {
        draw(0, 150, 150, 150);
    };

    const frame2 = () => {
        draw(10, 0, 10, 600);
    };

    const frame3 = () => {
        draw(0, 5, 70, 5);
    };

    const frame4 = () => {
        draw(60, 5, 60, 15);
    };

    const torso = () => {
        draw(60, 36, 60, 70);
    };

    const rightArm = () => {
        draw(60, 46, 100, 50);
    };

    const leftArm = () => {
        draw(60, 46, 20, 50);
    };

    const rightLeg = () => {
        draw(60, 70, 100, 100);
    };

    const leftLeg = () => {
        draw(60, 70, 20, 100);
    };

    let drawArrayCanvas = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];

    const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    const getDrawArray = () => this.drawArray;

    const getGuesses = () => this.guesses;

    const getAlphabet = () => this.alphabet;

    const toString = () => `Alphabet: ${this.alphabet} Guesses: ${this.guesses} Figure of canvas: ${this.drawArray}`;


    return {
        constructor,
        getAlphabet,
        getGuesses,
        result,
        toString
    }

})();
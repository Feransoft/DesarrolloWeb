const controller = ((platforms) =>  {

    const gui = {};

    let service;

    const init = (service) => {
        this.gui = gui;
        this.service = service;
        const promise = new Promise((resolve, reject) => {
            createElements();
        }).then(listener());
    };

    const createElements = () => {
        let body = platforms.getElementsByTagName('body')[0];
        this.gui.main = platforms.createElement('main');
        this.gui.main.setAttribute('class', 'col-lg-12');
        body.appendChild(this.gui.main);
        let section1 = platforms.createElement('section');
        section1.setAttribute('id', 'actionPizzas');
        section1.setAttribute('class', 'col-lg-12');
        this.gui.main.appendChild(section1);

        this.service.aPizzas.forEach(element => {
            let article = platforms.createElement('article');
            section1.appendChild(article);
            let header = platforms.createElement('header');
            article.appendChild(header);
            let h2 = platforms.createElement('h3');
            let tittleArticle = platforms.createTextNode(element.nombre);
            h2.appendChild(tittleArticle);
            header.appendChild(h2);
            let img = platforms.createElement('img');
            img.setAttribute('src', element.img);
            article.appendChild(img);
            let price = platforms.createElement('h4');
            let tittlePrice = platforms.createTextNode('Precio: ' + element.precio + '€');
            price.setAttribute('class', 'col-lg-12');
            price.appendChild(tittlePrice);
            article.appendChild(price);
            let button = platforms.createElement('button');
            button.setAttribute('class', 'btn btn-danger btn-block');
            button.setAttribute('type', 'button');
            let tittleButton = platforms.createTextNode('Añadir');
            button.appendChild(tittleButton);
            article.appendChild(button);
        });
    }

    let objectBill = {

    };


    const listener = (e) => {
        platforms.getElementById('actionPizzas').addEventListener('click', (e) => {
            if (e.target.nodeName == 'BUTTON') {
                e.preventDefault();
                existSection(e, createIngredients);
            }
        }, false)
    };

    const existSection = (e, createIngredients) => {
        while (this.gui.main.childNodes[1]) {
            this.gui.main.removeChild(this.gui.main.childNodes[1]);
        }

        createIngredients(e);
        createFactura();
    }



    const createIngredients = (e) => {
        this.gui.section2 = platforms.createElement('section');
        this.gui.section2.setAttribute('id', 'sectionIngredients');
        this.gui.section2.setAttribute('class', 'col-lg-4');
        this.gui.main.appendChild(this.gui.section2);
        let article = platforms.createElement('article');
        this.gui.section2.appendChild(article);
        let ul = platforms.createElement('ul');
        let textUl = platforms.createTextNode('Ingredientes');
        ul.appendChild(textUl);
        article.appendChild(ul);

        this.service.filterIngredients(e.target.parentNode.childNodes[0].childNodes[0].childNodes[0].nodeValue).forEach(element => {
            let li = platforms.createElement('li');
            li.setAttribute('class', 'list-group-item')
            li.setAttribute('onclick', 'controller.createTable(this, controller.sumTotal)')
            let textLi = platforms.createTextNode(element);
            li.appendChild(textLi);
            ul.appendChild(li);
        });

        this.gui.namePizza = e.target.parentNode.childNodes[0].childNodes[0].childNodes[0].nodeValue;
        this.gui.price = parseFloat(e.target.parentNode.childNodes[2].childNodes[0].nodeValue.split(' ')[1]);
        let sectionTable = platforms.createElement('section');
        sectionTable.setAttribute('id', 'sectionTable');
        sectionTable.setAttribute('class', 'col-lg-6');
        this.gui.table = platforms.createElement('table');
        let thead = platforms.createElement('thead');
        let trThead = platforms.createElement('tr');
        let th1 = platforms.createElement('th');
        let th2 = platforms.createElement('th');
        let th3 = platforms.createElement('th');
        let textNodeTh1 = platforms.createTextNode(this.gui.namePizza);
        let textNodeTh2 = platforms.createTextNode('price');
        let textNodeTh3 = platforms.createTextNode('');
        this.gui.tbody = platforms.createElement('tbody');
        this.gui.trTbody = platforms.createElement('tr')
        let td1 = platforms.createElement('td');
        let td2 = platforms.createElement('td');
        let textNodeTd1 = platforms.createTextNode('Total');
        let textNodeTd2 = platforms.createTextNode(this.gui.price);
        td1.appendChild(textNodeTd1);
        td2.appendChild(textNodeTd2);
        th1.appendChild(textNodeTh1);
        th2.appendChild(textNodeTh2);
        th3.appendChild(textNodeTh3);
        trThead.appendChild(th1);
        trThead.appendChild(th2);
        trThead.appendChild(th3);
        this.gui.trTbody.appendChild(td1);
        this.gui.trTbody.appendChild(td2);
        this.gui.tbody.appendChild(this.gui.trTbody);
        thead.appendChild(th1);
        thead.appendChild(th2);
        thead.appendChild(th3);
        this.gui.table.appendChild(thead);
        this.gui.table.appendChild(this.gui.tbody);
        sectionTable.appendChild(this.gui.table);
        this.gui.main.appendChild(sectionTable);
    };

    const createFactura = () => {
        this.gui.section4 = platforms.createElement('section');
        this.gui.section4.setAttribute('id', 'sectionFactura');
        this.gui.section4.setAttribute('class', 'col-lg-2');
        this.gui.main.appendChild(this.gui.section4);
        let article = platforms.createElement('article');
        this.gui.section4.appendChild(article);
        let label = platforms.createElement('label');
        let textLabel = platforms.createTextNode('Factura');
        label.appendChild(textLabel);
        article.appendChild(label);
        this.gui.input = platforms.createElement('input');
        this.gui.input.setAttribute('type', 'text')
        this.gui.input.setAttribute('class', 'form-control');
        this.gui.input.setAttribute('disabled', false);
        article.appendChild(this.gui.input);
        let button = platforms.createElement('button');
        button.setAttribute('class', 'btn btn-danger btn-block');
        button.setAttribute('type', 'button');
        button.setAttribute('onclick', 'controller.reboot()');
        let tittleButton = platforms.createTextNode('Finalizar pedido');
        button.appendChild(tittleButton);
        article.appendChild(button);

        objectBill[this.gui.namePizza] = {
            priceTotal: this.gui.price
        };

        this.gui.input.value = `Precio: ${objectBill[this.gui.namePizza].priceTotal}`;
    };

    const reboot = () => {
        platforms.location.reload();
    };

    const createTable = (element, sumTotal) => {

        element.disabled = true;
        element.setAttribute('class', 'disable');
        let ingredient = element.childNodes[0].nodeValue;
        let priceIngredient = this.service.searchPrice(ingredient);

        let tr = platforms.createElement('tr')
        let td1 = platforms.createElement('td');
        let td2 = platforms.createElement('td');
        let td3 = platforms.createElement('td');
        let textNodeTd1 = platforms.createTextNode(ingredient);
        let textNodeTd2 = platforms.createTextNode(priceIngredient);
        let button = platforms.createElement('button');
        let textNodeButton = platforms.createTextNode('Delete');
        button.setAttribute('onclick', 'controller.subtractTotal(this)');
        button.appendChild(textNodeButton);
        td1.appendChild(textNodeTd1);
        td2.appendChild(textNodeTd2);
        td3.appendChild(button);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        this.gui.tbody.insertBefore(tr, this.gui.trTbody);

        objectBill[this.gui.namePizza] = {
            priceTotal: priceIngredient
        };

        this.gui.input.value = `Precio: ${objectBill[this.gui.namePizza].priceTotal}`;

        sumTotal(element);
    }

    const sumTotal = (element) => {
        let ingredient = element.childNodes[0].nodeValue;
        let priceIngredient = this.service.searchPrice(ingredient);

        let previusTotalCost = parseFloat(this.gui.trTbody.childNodes[1].childNodes[0].nodeValue);
        let newTotal = this.service.sum([priceIngredient, previusTotalCost]);

        this.gui.trTbody.childNodes[1].childNodes[0].nodeValue = newTotal;

        objectBill[this.gui.namePizza] = {
            priceTotal: newTotal
        };

        this.gui.input.value = `Precio: ${objectBill[this.gui.namePizza].priceTotal}`;

    }

    const subtractTotal = (element) => {
        let ingredient = element.parentNode.parentNode.childNodes[0].childNodes[0].nodeValue;

        let ulIngredients = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].childNodes;
        ulIngredients.forEach((content1) => {
            content1.childNodes.forEach((content2) => {
                content2.childNodes.forEach((content3) => {
                    if (content3.nodeValue == ingredient) {
                        content2.setAttribute('class', 'list-group-item');
                    }
                })
            })
        })
        let child = element.parentNode.parentNode;
        let father = element.parentNode.parentNode.parentNode;

        let price = element.parentNode.parentNode.childNodes[1].childNodes[0].nodeValue;
        let previusTotalCost = parseFloat(this.gui.trTbody.childNodes[1].childNodes[0].nodeValue);

        let newTotal = this.service.subtract([previusTotalCost, price]);

        this.gui.trTbody.childNodes[1].childNodes[0].nodeValue = newTotal;

        objectBill[this.gui.namePizza] = {
            priceTotal: newTotal
        };

        this.gui.input.value = `Precio: ${objectBill[this.gui.namePizza].priceTotal}`;

        father.removeChild(child);


    };

    return {
        init,
        createTable,
        sumTotal,
        subtractTotal,
        reboot
    }

})(window.document);
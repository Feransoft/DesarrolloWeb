function Product(product = {}) {
    const {
        id = "noId", name = "noName", price = 0
    } = product;
    /*
    if (!ProductExpreg.ID.test(id)) {
        throw new Error("Product: Must have a valid ID");
    }*/
    this.id = id;
    this._name = name; // AL PONER this._name this.name
    this._price = price;
}
/*
if (!ProductExpreg.ID.test(id)) {
    throw new Error("Person: Must have a valid ID");
}

/////////// 
const ProductExpreg = {
    ID: /([0-9]{8}[A-Z]{1})/,
}


*/

Product.prototype = {
    get id() {
        return this._id;
    },
    set id(id) {
        if (!id) {
            throw new Error("Product: Must replace with another ID");
        }
        this._id = id;
    },
    get name() {
        return this._name;
    },
    set name(name) {
        if (!name) {
            throw new Error("Product: Must replace with another NAME");
        }
        if (!isNaN(name)) {
            throw new Error("Product: Must be a string");
        }
        this._name = name;
    },
    get price() {
        return this._price;
    },
    set price(price) {
        if (!price || price < 0) {
            throw new Error("Product: Must replace with another PRICE");
        }
        if (isNaN(price)) {
            throw new Error("Product: Mustn't be a string");
        }
        this._price = price;
    }
}

Product.prototype.calculateIVA = function () {
    if (!AppSettings.IVA) {
        throw new Error("Product: the IVA must exist");
    }
    return parseFloat(this.price * AppSettings.IVA / 100);
}

Product.prototype.calculateTotalPrice = function () {
    return this._price + this.calculateIVA()
}

Product.prototype.toString = function () {
    return `ID : ${this.id} , Nombre : ${this.name} , price : ${this.price}`;
}
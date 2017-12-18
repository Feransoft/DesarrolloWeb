function ProductService(products) {
    this.products = products; //LANZA EL SET PARA QUE SE GENERE el products SI O SI
    //EL ATRIBUTO PRIVADO _products SE GENERA SOLO EN EL SET, DEBIDO A QUE JS ES DINAMICO
}

ProductService.prototype = {
    get products() {
        return this._products;
    },
    set products(products) {
        if(!products) {
            throw new Error("Products: there aren't products");
        }
        this._products = products.map(product => new product["type"](product));
    },
    get productSelected() {
        return this._productSelected;
    },
    set productSelected(products) {
        this._productSelected = Object.assign(new Product(), product);
    }
}

ProductService.PRODUCT_TYPES = {
    "HardDisk": HardDisk,
    "Memory": Memory,
    "Cpu": Cpu,
};

ProductService.prototype.productFactory = function (product) {
    this._productSelected = new product["type"](product);
}
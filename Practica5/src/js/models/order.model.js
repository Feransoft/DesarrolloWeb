function Order() {
    this._order = new Map();
}

Order.prototype = {
    set order(order/*MAPA*/) {
        this._order = new Map(order);
    },
    get order() {
        return this._order;
    }
};

Order.prototype.addProduct = function (product) {
    const quantity = this.order.has(product.id)? this.order.get(product.id).quantity +1 : 1;

    this.order.set(product.id, {
        product,
        quantity,
    });
};

Order.prototype.removeProduct = function (product) {
    if (!product || !this.order.has(product.id)) {
        throw new Error("CANT REMOVE");
    }
    this.order.delete(product.id);
    return Object.assign({}, this.order);
}

Order.prototype.item = function (product) {
    if (!product || !this.order.has(product.id)) {
        throw new Error("DOESN'T EXIST");
    }
    return this.order.get(product.id);
}

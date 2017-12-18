function OrderService() {
    this._order = new Order();
}

OrderService.prototype = {
    get order() {
        return this._order
    },
    set order(order) {
        this._order = order;
    }
};
OrderService.prototype.addItem = function (product) {
    this.order.addProduct(product);
}
OrderService.prototype.removeItem = function (product) {
    this.order.removeProduct(product);
}
OrderService.prototype.item = function (product) {
    return this.order.item(product);
}
OrderService.prototype.detailPrice = function (product) {
    const { quantity } = this.order.item(product);
    return quantity * product.price;
}


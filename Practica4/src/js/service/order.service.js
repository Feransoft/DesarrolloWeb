function OrderService() {
  this._order = new Order();
}
OrderService.prototype = {
  get order() {
    return this._order;
  },
  set order(order) {
    this._order = order;
  }
};
OrderService.prototype.addItem = function (producto, cantidad) {
  this.order.addProduct(producto, cantidad);
}
OrderService.prototype.removeItem = function (producto) {
  this.order.removeProduct(producto);
}
OrderService.prototype.item = function (producto) {
  return this.order.item(producto);
}
OrderService.prototype.detailPrice = function (producto, cantidad) {
  return this.order.PriceTotal(producto, cantidad);
}
OrderService.prototype.totalBill = function () {
  return this.order.BillPrice();
}
OrderService.prototype.totalComision = function (comision) {
  return this.order.CalculateComision(comision);
}
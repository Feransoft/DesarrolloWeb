function Order() {
  this._order = new Map();
}

Order.prototype = {
  set order(order) {
    this._order = new Map(order);
  },
  get order() {
    return this._order;
  }
};

Order.prototype.addProduct = function (producto, cantidad) {
  const productoOrder = this.order.get(producto.hash);
  const quantity = productoOrder ? productoOrder.quantity + cantidad : cantidad;
  this.order.set(producto.hash, {
    producto,
    quantity
  });
};

Order.prototype.removeProduct = function (producto) {
  if (!producto || !this.order.has(producto.hash)) {
    throw new Error("Order: Forbidden remove this product");
  }
  this.order.delete(producto.hash);
}

Order.prototype.item = function (producto) {
  if (!producto || !this.order.has(producto.hash)) {
    throw new Error("Order: Product not found");
  }
  return this.order.get(producto.hash);
}

Order.prototype.PriceTotal = function (producto, cantidad) {
  return producto.calcPrice(cantidad);
}

Order.prototype.BillPrice = function () {
  let price = 0;
  this.order.forEach((value, key) => {
    price = price + value.producto._precio * value.quantity;
  });
  return price;
}

Order.prototype.CalculateComision = function (comision) {
  let price = 0;
  this.order.forEach((value, key) => {
    price = price + value.producto._precio * value.quantity;
  });
  return price * (comision / 100) + price;
}
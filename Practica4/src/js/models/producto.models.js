function Producto(producto = {}) {
  const { nombre = "", precio = "" } = producto;
  this._nombre = nombre;
  this._precio = precio;
}

Producto.prototype = {
  get name() {
    return this._nombre;
  },
  set name(name) {
    this._nombre = name;
  },
  get price() {
    return this._precio;
  },
  set price(precio) {
    throw new Error("Pizza: There are forbidden modify Price");
  },
  get hash() {
    return `${this.name},${this.price}`;
  }
};

Producto.prototype.calcPrice = function (cantidad) {
  if (cantidad < 0) {
    throw new Error("A negative price is not possible");
  }
  return this.price * cantidad;
};


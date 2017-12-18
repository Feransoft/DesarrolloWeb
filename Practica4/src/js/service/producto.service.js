function productoService(productos) {
  this.productos = productos;
  this._productoSelected = new Producto();
}

productoService.prototype = {
  get productos() {
    return this._productos;
  },
  set productos(productos) {
    this._productos = productos.map(element => new Producto(element));
  },
  get prdoductoSelected() {
    return this._productoSelected;
  },
  set productoSelected(productos) {
    this._productoSelected = Object.assign(productos, {});
  },
  set producto(productos) {
    this._productoSelected = Object.assign(new Producto(), productos);
  }
}
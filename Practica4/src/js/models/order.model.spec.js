describe("Order Moder", () => {
  describe("addProduct", () => {
    it("should add a product when the order is empty", () => {
      const producto1 = appSettings.productos[0];
      const order = new Order();
      const producto = new Producto(producto1);

      order.addProduct(producto);

      expect(order.item(producto).quantity).toBe(1);
      expect(order.item(producto).producto).toEqual(producto);
    });

    it("should add +1 to quantity when there is a product (type)", () => {
      const producto1 = appSettings.productos[0];
      const order = new Order();
      const producto = new Producto(producto1);
      order.addProduct(producto);
      order.addProduct(producto);

      expect(order.item(producto).quantity).toBe(2);
    });

    it("should add a new kind of producto", () => {
      const producto1 = appSettings.productos[0];
      const producto2 = appSettings.productos[1];
      const order = new Order();
      const item1 = new Producto(producto1);
      const item2 = new Producto(producto2);

      order.addProduct(item1);
      order.addProduct(item2);

      expect(order.item(item1).quantity).toBe(1);
      expect(order.item(item1).producto).toEqual(item1);
      expect(order.item(item2).producto).toEqual(item2);
      expect(order.item(item2).quantity).toBe(1);

    });
  });
  describe("#removeProduct", () => {
    it("should thrown a exception when the order is empty", () => {
      const producto2 = appSettings.productos[0];
      const order = new Order();
      const producto1 = new Producto(producto2);
      
      expect(
        function () {
          order.removeProduct(producto1);
        }
      ).toThrowError("Order: Forbidden remove this product");
    });
    it("should remove product that exist", () => {
      const producto1 = appSettings.productos[0];
      const producto2 = appSettings.productos[1];
      const order = new Order();
      const item1 = new Producto(producto1);
      const item2 = new Producto(producto2);

      order.addProduct(item1);
      order.addProduct(item2);
      order.removeProduct(item1);

      expect(
        function () {
          order.item(item1); 
        }
      ).toThrowError("Order: Product not found");
    })
  });
});
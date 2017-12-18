describe("Producto Model", () => {
  describe("#calcPrice", () => {
    it("should multiply the quantity by the price", () => {
      const producto1 = appSettings.productos[0];
      const producto = new Producto(producto1);
      const quantity = 200;

      expect(producto.calcPrice(2)).toBe(quantity);
    });

    it("should multiply with 0 this result equal 0", () => {
      const producto1 = appSettings.productos[0];
      const producto = new Producto(producto1);

      expect(producto.calcPrice(0)).toBe(0);
    });

    it("should thrown a exception when the price is negative", () => {
      const producto1 = appSettings.productos[0];
      const producto = new Producto(producto1);

      expect(
        function () {
          producto.calcPrice(-2);
        }
      ).toThrowError("A negative price is not possible");
    });
  });
});
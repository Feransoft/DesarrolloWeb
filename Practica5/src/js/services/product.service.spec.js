describe("Product Service", () => {
    describe("#products", () => {
        it("should clone", () => {
            const allProduct = AppSettings.product.map(product => new product["type"](product));
            const service = new ProductService(AppSettings.product);

            expect(service.products).toEqual(allProduct);

        });
        it('should thrown an exception when there Products', () => {
            expect(function () {
                const service = new ProductService("");
            }).toThrowError("Products: there aren't products");
        });
    });
    describe("#productFactory", () => {
        it('should create a new product with the factory', () => {
            const productFactory = {
                type: Cpu,
                id: 23423,
                name: "Intel",
                price: 24,
                frecuency: 3100,
            };
            const result = new Cpu(productFactory);
            const service = new ProductService(AppSettings.product);
            
            service.productFactory(productFactory);
            expect(service.productSelected).toEqual(result);
        });
    });
});
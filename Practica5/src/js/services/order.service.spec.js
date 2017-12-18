describe("Order Service", () => {
    describe("#addItem", () => {
        it("tracks that the spy was called", function () {
            const product = new Product();
            const orderService = new OrderService();

            orderService.addItem(product);
            spyOn(orderService.order, 'addProduct').and.callThrough();
            orderService.addItem(product);
            expect(orderService.order.addProduct).toHaveBeenCalledWith(product);
        });
    });
    describe("#removeItem", () => {
        it("tracks that the spy was called", function () {
            const product = new Product();
            const orderService = new OrderService();

            orderService.addItem(product);
            
            spyOn(orderService.order, 'removeProduct').and.callThrough();
            orderService.removeItem(product);
            expect(orderService.order.removeProduct).toHaveBeenCalledWith(product);
        });
    });
    describe("#item", () => {
        it("tracks that the spy was called", function () {
            const product = new Product();
            const orderService = new OrderService();

            orderService.addItem(product);
            
            spyOn(orderService.order, 'item').and.callThrough();
            orderService.item(product);
            expect(orderService.order.item).toHaveBeenCalledWith(product);
        });
    });
});
describe("Order Model", () => {
    describe("#addProduct", () => {
        it("should add an Product when the list is empty", () => {
            const order = new Order();
            const product1 = new Product();

            order.addProduct(product1);

            expect(order.item(product1).quantity).toBe(1);
            expect(order.item(product1).product).toEqual(product1);
        });
        it("should add an Product when there is a Product (quantity +1)", () => {
            const order = new Order();
            const product1 = new Product();

            order.addProduct(product1);
            order.addProduct(product1);

            expect(order.item(product1).product).toEqual(product1);
            expect(order.item(product1).quantity).toBe(2);
        });
        it("should add a new kind of Product", () => {
            const order = new Order();
            const product1 = new Product();
            const product2 = new Product();
            const newID = "newProduct";
            product2.id = newID;

            order.addProduct(product1);
            order.addProduct(product2);

            expect(order.item(product1).product).toEqual(product1);
            expect(order.item(product1).quantity).toBe(1);
            expect(order.item(product2).product).toEqual(product2);
            expect(order.item(product2).quantity).toBe(1);
        });
    });
    describe("#removeProduct", () => {
        describe("should throw a execption", () => {
            it("when Product is not define", () => {
                const order = new Order();
                const product1 = undefined;

                expect(
                    function () {
                        order.removeProduct(product1);
                    }
                ).toThrowError("CANT REMOVE");
            });
            it("when Product is not in the map", () => {
                const order = new Order();
                const product1 = new Product;

                expect(
                    function () {
                        order.removeProduct(product1);
                    }
                ).toThrowError("CANT REMOVE");
            });
        });
        it("should remove a Product when is in the map", () => {
            const order = new Order();
            const product2 = new Product();
            const newID = "newProduct";
            product2.id = newID;

            const product1 = new Product();
            const product3 = new Product();

            order.addProduct(product1);
            order.addProduct(product2);
            order.addProduct(product3);

            order.removeProduct(product1);

            expect(
                function () {
                    order.item(product1);
                }
            ).toThrowError();

            expect(
                function () {
                    order.item(product2);
                }
            ).not.toThrowError();
        });
    });
    describe("#item", () => {
        describe("should throw a Exeption", () => {
            it("when a product is undefined", () => {
                const order = new Order();
                const product1 = undefined;

                expect(
                    function () {
                        order.item(product1);
                    }
                ).toThrowError("DOESN'T EXIST");
            });
            it("when a product isn't in the map", () => {
                const order = new Order();
                const product1 = new Product();

                expect(
                    function () {
                        order.item(product1);
                    }
                ).toThrowError("DOESN'T EXIST");
            });
        });
        describe("shouldn't throw a Exeption", () => {
            it("when a product is in the map", () => {
                const order = new Order();
                const product1 = new Product();

                order.addProduct(product1);
                
                expect(
                    function () {
                        order.item(product1);
                    }
                ).not.toThrowError();
            });
        });
    });
});
describe("Product Model", () => {
    describe("#constructor", () => {
        it("should create a default Product", () => {
            const newProduct = new Product();
            expect(newProduct.id).toBe("noId");
            expect(newProduct.name).toBe("noName");
            expect(newProduct.price).toBe(0);
        });
        it("should create a CPU with caracteristics", () => {
            const newProduct1 = new Product({id:234,name:"New Product", price:20}, 2000);
            expect(newProduct1.id).toBe(234);
            expect(newProduct1.name).toBe("New Product");
            expect(newProduct1.price).toBe(20);
        });
    });
    describe("#id", () => {
        it("should change the product id", () => {
            const newProduct = new Product();
            const newId = 123423;

            newProduct.id = newId;

            expect(newProduct.id).toBe(newId);
        });
        it("should thrown an exception when the id is empti", () => {
            const newProduct = new Product();

            expect(function () {
                newProduct.id = "";
            }).toThrowError("Product: Must replace with another ID");
        });
    });
    describe("#name", () => {
        it("should change the product name", () => {
            const newProduct = new Product();
            const newName = "newProduct";

            newProduct.name = newName;

            expect(newProduct.name).toBe(newName);
        });
        it("should thrown an exception when the name is empti", () => {
            const newProduct = new Product();

            expect(function () {
                newProduct.name = "";
            }).toThrowError("Product: Must replace with another NAME");
        });
        it("should thrown an exception when the name is a number", () => {
            const newProduct = new Product();

            expect(function () {
                newProduct.name = 234;
            }).toThrowError("Product: Must be a string");
        });
    });
    describe("#price", () => {
        it("should change the product price", () => {
            const newProduct = new Product();
            const newPrice = 345;

            newProduct.price = newPrice;

            expect(newProduct.price).toBe(newPrice);
        });
        it("should thrown an exception when the price is empti", () => {
            const newProduct = new Product();

            expect(function () {
                newProduct.price = "";
            }).toThrowError("Product: Must replace with another PRICE");
        });
        it("should thrown an exception when the price is price less than zero", () => {
            const newProduct = new Product();

            expect(function () {
                newProduct.price = -6;
            }).toThrowError("Product: Must replace with another PRICE");
        });
        it("should thrown an exception when the price is a string", () => {
            const newProduct = new Product();

            expect(function () {
                newProduct.price = "asf";
            }).toThrowError("Product: Mustn't be a string");
        });
    });
    describe("#calculateIVA", () => {
        it("must calculate how much IVA is applied", () => {
            const newProduct = new Product();
            const newPrice = 100;

            newProduct.price = newPrice;

            expect(newProduct.calculateIVA()).toBe(21);
        });
        it("should thrown an exception when the IVA is not define", () => {
            const newProduct = new Product();
            const newPrice = 100;

            newProduct.price = newPrice;
            AppSettings.IVA = null;
            expect(function () {
                newProduct.calculateIVA()
            }).toThrowError("Product: the IVA must exist");
            AppSettings.IVA = "21";
        });
    });
    describe("#calculateTotalPrice", () => {
        it("should calculate total price from the product", () => {
            const newProduct = new Product();
            const newPrice = 100;

            newProduct.price = newPrice;

            expect(newProduct.calculateTotalPrice()).toBe(121);
        });
    });
    describe("#toString", () => {
        it("should return a decripcion of the object", () => {
            const newProduct = new Product();

            expect(newProduct.toString()).toBe("ID : noId , Nombre : noName , price : 0");
        });
    });
});
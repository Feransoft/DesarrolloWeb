describe("Memory Model", () => {
    describe("#constructor", () => {
        it("should create a default Product", () => {
            const newProduct = new Memory();
            expect(newProduct.id).toBe("noId");
            expect(newProduct.name).toBe("noName");
            expect(newProduct.price).toBe(0);
            expect(newProduct.capacity).toBe(0);
            expect(newProduct.frecuency).toBe(0);

        });
        it("should create a Memory with caracteristics", () => {
            const newProduct1 = new Memory({
                id: 234,
                name: "Kingston DDR4",
                price: 20
            }, 3200, 4);
            expect(newProduct1.id).toBe(234);
            expect(newProduct1.name).toBe("Kingston DDR4");
            expect(newProduct1.price).toBe(20);
            expect(newProduct1.frecuency).toBe(3200);
            expect(newProduct1.capacity).toBe(4);
        });
    });
    describe("#frecuency", () => {
        it("should change the Memory capacity", () => {
            const newMemory = new Memory();
            const newFrecuency = 1234;

            newMemory.frecuency = newFrecuency;

            expect(newMemory.frecuency).toBe(newFrecuency);
        });
        it("should thrown an exception when the capacity is empti", () => {
            const newMemory = new Memory();

            expect(function () {
                newMemory.frecuency = "";
            }).toThrowError('Memory : Must have a frecuency');
        });
        it("should thrown an exception when the frecuency less than 0", () => {
            const newMemory = new Memory();

            expect(function () {
                newMemory.frecuency = -4;
            }).toThrowError('Memory : Must have a frecuency');
        });
        it("should thrown an exception when the frecuency is not a number", () => {
            const newMemory = new Memory();

            expect(function () {
                newMemory.frecuency = "ertre";
            }).toThrowError("Memory : Mustn't be a string");
        });
    });
    describe("#capacity", () => {
        it("should change the Memory capacity", () => {
            const newMemory = new Memory();
            const newCapacity = 1234;

            newMemory.capacity = newCapacity;

            expect(newMemory.capacity).toBe(newCapacity);
        });
        it("should thrown an exception when the capacity is empti", () => {
            const newMemory = new Memory();

            expect(function () {
                newMemory.capacity = "";
            }).toThrowError('Memory : Must have a capacity');
        });
        it("should thrown an exception when the capacity less than 0", () => {
            const newMemory = new Memory();

            expect(function () {
                newMemory.capacity = -4;
            }).toThrowError('Memory : Must have a capacity');
        });
        it("should thrown an exception when the capacity is not a number", () => {
            const newMemory = new Memory();

            expect(function () {
                newMemory.capacity = "ertre";
            }).toThrowError("Memory : Mustn't be a string");
        });
    });
    describe("#toString", () => {
        it("should return the type", () => {
            const newProduct = new Memory();
            expect(newProduct.toString()).toBe("Memory");
        });
    });
});
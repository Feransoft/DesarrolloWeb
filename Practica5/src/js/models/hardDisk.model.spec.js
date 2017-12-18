describe("HardDisk Model", () => {
    describe("#constructor", () => {
        it("should create a default Product", () => {
            const newProduct = new HardDisk();
            expect(newProduct.id).toBe("noId");
            expect(newProduct.name).toBe("noName");
            expect(newProduct.price).toBe(0);
            expect(newProduct.capacity).toBe(0);
            expect(newProduct.cannon).toBe(0);
        });
        it("should create a Memory with caracteristics", () => {
            const newProduct1 = new HardDisk({id:234,name:"TOSHIBA", price:20}, 2000, 4);
            expect(newProduct1.id).toBe(234);
            expect(newProduct1.name).toBe("TOSHIBA");
            expect(newProduct1.price).toBe(20);
            expect(newProduct1.capacity).toBe(2000);
            expect(newProduct1.cannon).toBe(4);   
        });
    });
    describe("#capacity", () => {
        it("should change the Hard Disk capacity", () => {
            const newHardDisk = new HardDisk();
            const newCapacity = 1234;

            newHardDisk.capacity = newCapacity;

            expect(newHardDisk.capacity).toBe(newCapacity);
        });
        it("should thrown an exception when the capacity is empti", () => {
            const newHardDisk = new HardDisk();

            expect(function () {
                newHardDisk.capacity = "";
            }).toThrowError('HardDisk : Must have a capacity');
        });
        it("should thrown an exception when the capacity less than 0", () => {
            const newHardDisk = new HardDisk();

            expect(function () {
                newHardDisk.capacity = -4;
            }).toThrowError('HardDisk : Must have a capacity');
        });
        it("should thrown an exception when the capacity is not a number", () => {
            const newHardDisk = new HardDisk();

            expect(function () {
                newHardDisk.capacity = "ertre";
            }).toThrowError("HardDisk : Mustn't be a string");
        });
    });
    describe("#cannon", () => {
        it("should change the Hard Disk cannon", () => {
            const newHardDisk = new HardDisk();
            const newCannon = 1234;

            newHardDisk.cannon = newCannon;

            expect(newHardDisk.cannon).toBe(newCannon);
        });
        it("should thrown an exception when the cannon is empti", () => {
            const newHardDisk = new HardDisk();

            expect(function () {
                newHardDisk.cannon = "";
            }).toThrowError('HardDisk : Must have a cannon');
        });
        it("should thrown an exception when the cannon less than 0", () => {
            const newHardDisk = new HardDisk();

            expect(function () {
                newHardDisk.cannon = -4;
            }).toThrowError('HardDisk : Must have a cannon');
        });
        it("should thrown an exception when the cannon is not a number", () => {
            const newHardDisk = new HardDisk();

            expect(function () {
                newHardDisk.cannon = "ertre";
            }).toThrowError("HardDisk : Mustn't be a string");
        });
    });
    describe("#getTotalPrice", () => {
        it("should retur the total price of the product", () => {
            const newHardDisk = new HardDisk();
            const newCannon = 1;

            newHardDisk.cannon = newCannon;

            expect(newHardDisk.getTotalPrice()).toBe(1);
        });
    });
    describe("#toString", () => {
        it("should return the type", () => {
            const newProduct = new HardDisk();
            expect(newProduct.toString()).toBe("Hard Disk");
        });
    });
});
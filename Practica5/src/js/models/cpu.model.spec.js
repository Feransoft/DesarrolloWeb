describe("Cpu Model", () => {
    describe("#constructor", () => {
        it("should create a default Product", () => {
            const newProduct = new Cpu();
            expect(newProduct.id).toBe("noId");
            expect(newProduct.name).toBe("noName");
            expect(newProduct.price).toBe(0);
            expect(newProduct.frecuency).toBe(0);

        });
        it("should create a CPU with caracteristics", () => {
            const newProduct1 = new Cpu({id:234,name:"INTEL", price:20}, 2000);
            expect(newProduct1.id).toBe(234);
            expect(newProduct1.name).toBe("INTEL");
            expect(newProduct1.price).toBe(20);
            expect(newProduct1.frecuency).toBe(2000);
        });
    });
    describe("#frecuency", () => {
        it("should change the CPU frecuency", () => {
            const newCpu = new Cpu();
            const newFrecuency = 1234;

            newCpu.frecuency = newFrecuency;

            expect(newCpu.frecuency).toBe(newFrecuency);
        });
        it("should thrown an exception when the frecuency is empti", () => {
            const newCpu = new Cpu();

            expect(function () {
                newCpu.frecuency = "";
            }).toThrowError("CPU: Mustn't be empty");
        });
        it("should thrown an exception when the frecuency less than 0", () => {
            const newCpu = new Cpu();

            expect(function () {
                newCpu.frecuency = -4;
            }).toThrowError("CPU: Mustn't be empty");
        });
        it("should thrown an exception when the frecuency is not a number", () => {
            const newCpu = new Cpu();

            expect(function () {
                newCpu.frecuency = "ertre";
            }).toThrowError("CPU: Mustn't be a string");
        });
    });
    describe("#toString", () => {
        it("should return the type", () => {
            const newProduct = new Cpu();
            expect(newProduct.toString()).toBe("CPU");
        });
    });
});
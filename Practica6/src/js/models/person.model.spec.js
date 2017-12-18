describe('Person Model', function () {
    describe("#NewPerson", () => {
        it("should create a default Person", () => {
            const person = new Person();
            expect(person.id).toBe("1234567A");
            expect(person.name).toBe("noName");
            expect(person.lastName).toBe("nolastName");
            expect(person.gender).toBe("noSex");
            expect(person.birthday).toBe("01/01/1970");
            expect(person.phone.length).toBe(0);
        });
        it("should create a person with profile", () => {
            const newPerson = new Person({
                id: "76882489K",
                name: "Daniel",
                lastName: "Gallardo",
                gender: "H",
                birthday: "29/12/1991",
                phone: ["952111111"]
            });
            expect(newPerson.id).toBe("76882489K");
            expect(newPerson.name).toBe("Daniel");
            expect(newPerson.lastName).toBe("Gallardo");
            expect(newPerson.gender).toBe("H");
            expect(newPerson.birthday).toBe("29/12/1991");
            expect(newPerson.phone.length).toBe(1);
        });
    });
    describe('toEqual', () => {
        describe("should compare two person", () => {
            it('should to be true if are the same person', () => {
                const person1 = new Person();
                const person2 = new Person();

                expect(person1.toEqual(person2)).toBeTruthy();
            });
            it('should to be false if are not the same person', () => {
                const person1 = new Person();
                const person2 = new Person({
                    id: 123,
                });

                expect(person1.toEqual(person2)).toBeFalsy();
            });
        });

    });

    describe("toString", () => {
        it("should return a strign with the person's profile", () => {
            const name = "Dani";
            const lastName = "Gallardo";
            const id = "76882489K";

            const person = new Person({
                id: id,
                name: name,
                lastName: lastName,
                gender: "H",
                birthday: "29/12/1991",
                phone: ["952111111"]
            });
            expect(person.toString()).toBe(`ID: ${id} Name: ${name} Last Name: ${lastName}`)
        });
    });
});
describe("Agenda Model", () => {
    describe("#addPerson", () => {
        describe("should throw a execption", () => {
            it("when person is already in agenda", () => {
                const person = new Person();
                const agenda = new Agenda();

                agenda.addPerson(person);

                expect(
                    function () {
                        agenda.addPerson(person);
                    }
                ).toThrowError("Person: This person is already listed");
            });
        });
        it("should add a person in the agenda", function () {
            const person = new Person();
            const agenda = new Agenda();

            agenda.addPerson(person);

            expect(agenda.checkPerson(person).person).toEqual(person);
        });
    });
    describe("#removePerson", () => {
        describe("should throw a execption", () => {
            it("when person is not in agenda", () => {
                const person = new Person();
                const agenda = new Agenda();

                expect(
                    function () {
                        agenda.removePerson(person);
                    }
                ).toThrowError("Person: This person it's not listed");
            });
        });
        it("should remove a person in the agenda", function () {
            const person = new Person();
            const agenda = new Agenda();

            agenda.addPerson(person);
            agenda.removePerson(person);

            expect(function () {
                agenda.checkPerson(person);
            }).toThrowError("Agenda: Person not found");
        });
    });
});
function Agenda() {
    this._agenda = new Map();
}

Agenda.prototype = {

    get agenda() {
        return this._agenda;
    },
    set agenda(agenda) {
        this._agenda = new Map(agenda);
    }

};

Agenda.prototype.addPerson = function (person) {
    if (this.agenda.get(person.id))
        throw new Error("Person: This person is already listed");
    this.agenda.set(person.id, {
        person,
    });
};


Agenda.prototype.removePerson = function (person) {
    if (!person || !this.agenda.has(person.id)) {
        throw new Error("Person: This person it's not listed");
    }
    this.agenda.delete(person.id);
}

Agenda.prototype.checkPerson = function (person) {
    if (!person || !this.agenda.has(person.id)) {
        throw new Error("Agenda: Person not found");
    }
    return this.agenda.get(person.id);
}
function AgendaService() {
    this._agenda = new Agenda();
}
AgendaService.prototype = {
    get agenda() {
        return this._agenda;
    },
    set agenda(agenda) {
        this._agenda = agenda;
    }
};

AgendaService.prototype.addPerson = function (person) {
    this.agenda.addPerson(person);
}
AgendaService.prototype.removePerson = function (person) {
    this.agenda.removePerson(person);
}
AgendaService.prototype.consultAgenda = function (person) {
    return this.agenda.checkPerson(person);
}
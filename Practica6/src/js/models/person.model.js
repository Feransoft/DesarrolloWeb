function Person(person = {}) {
    const {
        id = "1234567A", name = "noName", lastName = "nolastName", gender = "noSex", birthday = "01/01/1970", phone = []
    } = person;
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.gender = gender;
    this.birthday = birthday;
    this.phone = phone;
}

Person.prototype = {
    get id() {
        return this._id;
    },

    set id(id) {
        if (!id)
            throw new Error("ID: There's no ID");
        if (isNaN(id))
            throw new Error("ID: It must be a string");
        this._id = id;
    },

    get name() {
        return this._name;
    },

    set name(name) {
        if (!name)
            throw new Error("Name: There's no name");

        if (!isNaN(name))
            throw new Error("Name: It must be a string");
        this._name = name;
    },

    get lastName() {
        return this._lastName;
    },

    set lastName(lastName) {
        if (!lastName)
            throw new Error("Last Name: There's no last name");

        if (!isNaN(lastName))
            throw new Error("Last Name: It must be a string");
        this._lastName = lastName;
    },

    get gender() {
        return this._gender;
    },

    set gender(gender) {
        if (!gender)
            throw new Error("Gender: There's no gender");

        if (!isNaN(gender))
            throw new Error("Gender: It must be a string");
        this._gender = gender;
    },

    get birthday() {
        return this._birthday;
    },

    set birthday(birthday) {
        if (!birthday)
            throw new Error("Birthday: There's no birthday");
        if (!isNaN(birthday))
            throw new Error("Birthday: It must be a string");
        this._birthday = moment(birthday, "DD/MM/YYYY").format("DD/MM/YYYY");
    },

    get phone() {
        return this._phone;
    },

    set phone(phone) {
        if (!phone)
            throw new Error("Phone: There's no phone");
        this._phone = [...phone];
    },
};


Person.prototype.toEqual = function (person) {
    return this.id === person.id
}

Person.prototype.toString = function () {
    return `ID: ${this.id} Name: ${this.name} Last Name: ${this.lastName}`;
}
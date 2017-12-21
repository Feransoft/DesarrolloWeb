function Conflicts(conflicts = {}) {
  const {
    UUID = "c333e630-ddb0-4105-9439-78777cc4bbce", Nombre = "noName", FechaComienzo = "18-04-1993",
    FechaFin = "15-12-2017", Paises = ["España", "Alemania"], Bajas = 20
  } = conflicts
  this.UUID = UUID;
  this.Nombre = Nombre;
  this.FechaComienzo = FechaComienzo;
  this.FechaFin = FechaFin;
  this.Paises = Paises;
  this.Bajas = Bajas;
}

Conflicts.prototype = {
  get UUID() {
    return this._UUID;
  },
  set UUID(UUID) {
    if (!UUID) {
      throw new Error("UUID: There's no UUID");
    }
    if (!ExpRegex.UUID.test(UUID)) {
      throw new Error("UUID: UUID is not valid");
    }
    this._UUID = UUID;
  },
  get Nombre() {
    return this._Nombre;
  },
  set Nombre(Nombre) {
    if (!Nombre) {
      throw new Error("Nombre: There's no Name");
    }
    if (!ExpRegex.Nombre.test(Nombre)) {
      throw new Error("Nombre: Name is not valid");
    }
    this._Nombre = Nombre;
  },
  get FechaComienzo() {
    return this._FechaComienzo;
  },
  set FechaComienzo(FechaComienzo) {
    if (!FechaComienzo) {
      throw new Error("FechaComienzo: There's no Date");
    }
    if (!isNaN(FechaComienzo)) {
      throw new Error("FechaComienzo: It must be a string");
    }
    if (moment(FechaComienzo, "DD/MM/YYYY").isBefore("1900-01-01")) {
      throw new Error("FechaComienzo: The date is not valid, because is before a 1990");
    }
    this._FechaComienzo = moment(FechaComienzo, "DD/MM/YYYY").format("DD-MM-YYYY");
  },
  get FechaFin() {
    return this._FechaFin;
  },
  set FechaFin(FechaFin) {
    if (!FechaFin) {
      throw new Error("FechaFin: There's no Date");
    }
    if (!isNaN(FechaFin)) {
      throw new Error("FechaFin: It must be a string");
    }
    if (moment(FechaFin, "DD/MM/YYYY").isBefore(moment(this._FechaComienzo, "DD/MM/YYYY"))) {
      throw new Error("FechaFin: The date is not valid, because is before a FechaComienzo");
    }
    this._FechaFin = moment(FechaFin, "DD/MM/YYYY").format("DD-MM-YYYY");
  },
  get Paises() {
    return this._Paises;
  },
  set Paises(Paises) {
    if (Paises.length < 2) {
      throw new Error("Paises: There must be at least 2 countries");
    }
    this._Paises = Paises;
  },
  get Bajas() {
    return this._Bajas;
  },
  set Bajas(Bajas) {
    if (Bajas < 0) {
      throw new Error("Bajas: There must be al leat 0 wounded");
    }
    this._Bajas = Bajas;
  }
}

Conflicts.prototype.toString = function () {
  return `UUID: ${this.UUID} Nombre: ${this.Nombre} Fecha Comienzo: ${this.FechaComienzo} Fecha Fin: ${this.FechaFin} Paises: ${this.Paises} Bajas: ${this.Bajas}`;
}
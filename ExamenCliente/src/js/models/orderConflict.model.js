function listConflict() {
  this.orderConflict = new Map();
}

listConflict.prototype = {

  get listConflict() {
      return this._orderConflict;
  },
  set listConflict(conflict) {
      this._orderConflict = new Map(conflict);
  }

};

listConflict.prototype.addConflict = function (conflict) {
  if (this.orderConflict.get(conflict.UUID))
      throw new Error("Conflict: This conflict is already listed");
  this.orderConflict.set(conflict.UUID, {
      conflict,
  });
};

listConflict.prototype.checkConflict = function (conflict) {
  if (!conflict || !this.orderConflict.has(conflict.UUID)) {
      throw new Error("Conflict: conflict not found");
  }
  return this.orderConflict.get(conflict.UUID);
}

listConflict.prototype.updateConflict = function (conflict, propierty, text) {
  if (!conflict || !this.orderConflict.has(conflict.UUID)) {
    throw new Error("Conflict: conflict not found");
  }
  if (propierty == 'UUID') {
    throw new Error('updateConflict: Can`t change the UUID');
  }
  if (propierty == 'Nombre') {
    conflict.Nombre = text;
  }
  if (propierty == 'FechaComienzo') {
    conflict.FechaComienzo = text;
  }
  if (propierty == 'FechaFin') {
    conflict.FechaFin = text;
  }
  if (propierty == 'Paises') {
    conflict.Paises = text;
  }
  if (propierty == 'Bajas') {
    conflict.Bajas = text;
  }
  if (propierty == 'affectedRegions') {
    conflict.affectedRegions = text;
  }
  if (propierty == 'rawMaterials') {
    conflict.rawMaterials = text;
  }
  if (propierty == 'opposingEthnicGroups') {
    conflict.opposingEthnicGroups = text;
  }
  //this.checkConflict(conflict).conflict.propierty = text;
}

listConflict.prototype.removeConflict = function (conflict) {
  if (!conflict || !this.orderConflict.has(conflict.UUID)) {
    throw new Error("Conflict: conflict not found");
  }
  this.orderConflict.delete(conflict.UUID);
}
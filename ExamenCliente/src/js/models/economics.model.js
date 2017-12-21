function Economics(conflicts = {}, rawMaterials = ['Petroleo']) {
  Conflicts.call(this, conflicts);
  this.rawMaterials = rawMaterials;
}

Economics.prototype = Object.create(Conflicts.prototype);

Object.defineProperty(Economics.prototype, "raw Materials", {
  get: function rawMaterials() {
      return this._rawMaterials;
  },

  set: function rawMaterials(rawMaterials) {
      if(rawMaterials.length <= 0){
          throw new Error("rawMaterials: Mustn't be empty");
      }
      rawMaterials.map(element => {
        if(!isNaN(element)){
            throw new Error("rawMaterials: Mustn't be a number");
        }
      })
      this._rawMaterials = rawMaterials;
  },
});

Economics.prototype.toString = function () {
    return "ECONOMICS";
}

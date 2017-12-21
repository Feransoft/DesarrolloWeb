function Territorial(conflicts = {}, affectedRegions = ['Andalucia', 'Madrid']) {
  Conflicts.call(this, conflicts);
  this.affectedRegions = affectedRegions;
}

Territorial.prototype = Object.create(Conflicts.prototype);

Object.defineProperty(Territorial.prototype, "affectedRegions", {
  get: function affectedRegions() {
      return this._affectedRegions;
  },

  set: function affectedRegions(affectedRegions) {
      if(affectedRegions.length <= 0){
          throw new Error("affectedRegions: Mustn't be empty");
      }
      affectedRegions.map(element => {
        if(!isNaN(element)){
            throw new Error("affectedRegions: Mustn't be a number");
        }
      })
      this._affectedRegions = affectedRegions;
  },
});

Territorial.prototype.toString = function () {
    return "TERRITORIAL";
}

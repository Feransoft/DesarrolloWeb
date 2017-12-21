function Racial(conflicts = {}, opposingEthnicGroups = ['Andalucia', 'Madrid']) {
  Conflicts.call(this, conflicts);
  this.opposingEthnicGroups = opposingEthnicGroups;
}

Racial.prototype = Object.create(Conflicts.prototype);

Object.defineProperty(Racial.prototype, "opposingEthnicGroups", {
  get: function opposingEthnicGroups() {
      return this._opposingEthnicGroups;
  },

  set: function opposingEthnicGroups(opposingEthnicGroups) {
      if(opposingEthnicGroups.length <= 0){
          throw new Error("opposingEthnicGroups: Mustn't be empty");
      }
      opposingEthnicGroups.map(element => {
        if(!isNaN(element)){
            throw new Error("opposingEthnicGroups: Mustn't be a number");
        }
      })
      this._opposingEthnicGroups = opposingEthnicGroups;
  },
});

Racial.prototype.toString = function () {
    return "RACIAL";
}
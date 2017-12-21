describe("Conflicts Model", () => {
  describe("#addConflicts", () => {
    it("should throw a exeception when this Conflicts is listed", () => {
      const territorialConflict = new Territorial();
      const orderConflict = new listConflict();

      orderConflict.addConflict(territorialConflict);

      expect(
        function () {
          orderConflict.addConflict(territorialConflict);
        }
      ).toThrowError("Conflict: This conflict is already listed");
    });
  });
  describe("#checkConflict", () => {
    it("should return the requested object", () => {
      const territorialConflict = new Territorial();
      const orderConflict = new listConflict();

      orderConflict.addConflict(territorialConflict);

      expect(orderConflict.checkConflict(territorialConflict)).toBe(orderConflict.orderConflict.get(territorialConflict.UUID));
    });
    it("should return throw a exeception when Conflict not found", () => {
      const territorialConflict = new Territorial();
      const orderConflict = new listConflict();

      expect(
        function () {
          orderConflict.checkConflict(territorialConflict);
        }
      ).toThrowError("Conflict: conflict not found")
    });
    it("should return throw a exeception when you do not pass anything by parameter", () => {
      const orderConflict = new listConflict();

      expect(
        function () {
          orderConflict.checkConflict();
        }
      ).toThrowError("Conflict: conflict not found");
    });
  });

  describe("#updateConflict", () => {
    it("should change the propierty of obeject", () => {
      const territorialConflict = new Territorial();
      const orderConflict = new listConflict();

      orderConflict.addConflict(territorialConflict);
      orderConflict.updateConflict(territorialConflict, 'Nombre', 'Guerra Civil');
      
      expect(territorialConflict.Nombre).toBe('Guerra Civil');

    //orderConflict.updateConflict(territorialConflict.UUID);
    });

    it("should return throw a exeception when you have change the UUID", () => {
      const territorialConflict = new Territorial();
      const orderConflict = new listConflict();

      orderConflict.addConflict(territorialConflict);
  
      expect(
        function () {
          orderConflict.updateConflict(territorialConflict, 'UUID', 'Guerra Civil');
        }
      ).toThrowError("updateConflict: Can`t change the UUID");

    //orderConflict.updateConflict(territorialConflict.UUID);
    });

  });

  describe("#removeConflict", () => {
    it("should delete the conflict selected", () => {
      const territorialConflict = new Territorial();
      const orderConflict = new listConflict();

      orderConflict.addConflict(territorialConflict);
      orderConflict.removeConflict(territorialConflict);

      expect(orderConflict.orderConflict.has(territorialConflict)).toBeFalsy();
    });
    it("should delete the conflict selected", () => {
      const territorialConflict = new Territorial();
      const orderConflict = new listConflict();

      expect(
        function () {
          orderConflict.removeConflict(territorialConflict);
        }
      ).toThrowError("Conflict: conflict not found");
    });
  })
});
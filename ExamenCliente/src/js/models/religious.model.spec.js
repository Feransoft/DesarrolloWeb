describe("Religious Model", () => {
  describe("#constructor", () => {
    it("should create a default Religious", () => {
      const NewConflicts = new Religious();

      expect(NewConflicts.UUID).toBe("c333e630-ddb0-4105-9439-78777cc4bbce");
      expect(NewConflicts.Nombre).toBe("noName");
      expect(NewConflicts.FechaComienzo).toBe("18-04-1993");
      expect(NewConflicts.FechaFin).toBe("15-12-2017");
      expect(NewConflicts.Paises).toEqual(["España", "Alemania"]);
      expect(NewConflicts.Bajas).toBe(20);
      expect(NewConflicts.affectedRegions).toEqual(["Andalucia", "Madrid"])

    });
  });
});
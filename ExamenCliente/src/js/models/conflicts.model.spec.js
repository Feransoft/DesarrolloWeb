describe('Conflicts Model', function () {
  describe('#NewConflicts', () => {
    it("should create a default Conflicts", () => {
      const NewConflicts = new Conflicts();

      expect(NewConflicts.UUID).toBe("c333e630-ddb0-4105-9439-78777cc4bbce");
      expect(NewConflicts.Nombre).toBe("noName");
      expect(NewConflicts.FechaComienzo).toBe("18-04-1993");
      expect(NewConflicts.FechaFin).toBe("15-12-2017");
      expect(NewConflicts.Paises).toEqual(["España", "Alemania"]);
      expect(NewConflicts.Bajas).toBe(20);
    });

    it("should create a conflict with profile", () => {
      const NewConflicts = new Conflicts({
        UUID: 'ca761232-ed42-11ce-bacd-00aa0057b223',
        Nombre: 'Guerra Fria',
        FechaComienzo: '16-04-1970',
        FechaFin: '23-02-1971',
        Paises: ['EEUU', 'RUSIA'],
        Bajas: 89
      });

      expect(NewConflicts.UUID).toBe("ca761232-ed42-11ce-bacd-00aa0057b223");
      expect(NewConflicts.Nombre).toBe("Guerra Fria");
      expect(NewConflicts.FechaComienzo).toBe("16-04-1970");
      expect(NewConflicts.FechaFin).toBe("23-02-1971");
      expect(NewConflicts.Paises).toEqual(['EEUU', 'RUSIA']);
      expect(NewConflicts.Bajas).toBe(89);
    });
  })
  describe("toString", () => {
    it("should return a strign with the conflict's profile", () => {

      const conflict = new Conflicts({
        UUID: 'ca761232-ed42-11ce-bacd-00aa0057b223',
        Nombre: 'Guerra Fria',
        FechaComienzo: '16-04-1970',
        FechaFin: '23-02-1971',
        Paises: ['EEUU', 'RUSIA'],
        Bajas: 89
      });
      expect(conflict.toString()).toBe(`UUID: ${conflict.UUID} Nombre: ${conflict.Nombre} Fecha Comienzo: ${conflict.FechaComienzo} Fecha Fin: ${conflict.FechaFin} Paises: ${conflict.Paises} Bajas: ${conflict.Bajas}`);
    });
  });
});
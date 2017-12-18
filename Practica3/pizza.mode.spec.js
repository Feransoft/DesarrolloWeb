/*Configurar karma para que primero se cargen los models, luego ls services y por ultimo los src
  src/models/*.js
  src/service/*.js
  el toString es para serializar un objeto.
  Es importante hacerle pruebas tmb al constructor, pero en este caso es una tonteria
*/

describe("Pizza Model", () => {
  describe("#addIgredients", () => {
    it("should add an ingredient when the list is empty", () => {
      const emptyPizza = new Pizza();
      const ingredients = "chicken";

      emptyPizza.addIngredient(ingredients);

      expect(emptyPizza.ingredients.length).toBe(1);
      expect(emptyPizza.ingredients[0].tobe(ingredients));
     });
    it("should add an ingredient when the list has ingredient", () => {
      const pizza = new Pizza();
      const ingredient = "chicken";
      pizza.ingredient = ["Pork", "Beef"];
      const numIngredients = pizza.ingredient.length;

      pizza.addIngredient(ingredient);

      expect()
     });
  });

  describe("#removeIngredients", () =>  {
    it("should remove an ingredient when there is in the list", () => {
      const pizza = new Pizza();
      const ingredient = "Pork";

      pizza.ingredient = ["Pork, Beef"];
      const numIngredients = pizza.ingredient.length;

      pizza.removeIngredient(ingredient);

      expect(pizza.ingredient.length).toBe(numIngredients - 1);
      pizza.ingredient.forEach(ingredientInPizza => {
        expect(ingredientInPizza).not.toBe(ingredient);
      });
     });
    it("should thrown an exception when there is not in the list", () => { });
  });

  describe("#setSize", () => {
    describe("should modify priceBase", () => {
      const expectValue = {
        priceBaseLittle : 5,
        priceBaseMeidum: 7,
        priceBaseBig: 9
      }
    });
    it("when is litte", () => {
      const pizzaLittle = new Pizza();
      pizzaLittle.size = "little";

      expect(pizzaLittle.priceBase).toBe(expectValue.priceBaseLittle);
     });
    it("when is medium", () => { 
      const pizzaMedium = new Pizza();
      pizzaMedium.size = "medium";

      expect(pizzaMedium.priceBase).toBe(expectValue.priceBaseMedium);
    });
    it("when is big", () => { 
      const pizzaBig = new Pizza();
      pizzaBig.size = "big";

      expect(pizzaBig.priceBase).toBe(expectValue.priceBaseBig);
    });
  });

  describe("#calcPrice", () => {
    describe("#should return the price of a pizza", () => {
      it("when it's litte pizza with 3 ingredients", () => {
        const pizza = new Pizza();
        pizza.size = "little";
        pizza.ingredients = ["Tomato", "Pork", "Beef"];
        const expectPrice = 8.6;

        expect(pizza.calcPrice().toBe(expectPrice));
       });
      it("when it's litte pizza withthout ingredients", () => {
        const pizza = new Pizza();
        pizza.size = "little";
        pizza.ingredients = ["Tomato", "Pork", "Beef"];
        const expectPrice = 5;

        expect(pizza.calcPrice().toBe(expectPrice));
       });

      it("when it's medium pizza with 3 ingredients", () => {
        const pizza = new Pizza();
        pizza.size = "little";
        pizza.ingredients = ["Tomato", "Pork", "Beef"];
        const expectPrice = 11.6;

        expect(pizza.calcPrice().toBe(expectPrice));
       });
      it("when it's medium pizza withthout ingredients", () => {
        const pizza = new Pizza();
        pizza.size = "little";
        pizza.ingredients = ["Tomato", "Pork", "Beef"];
        const expectPrice = 7;

        expect(pizza.calcPrice().toBe(expectPrice));
       });

      it("when it's big pizza with 3 ingredients", () => {
        const pizza = new Pizza();
        pizza.size = "little";
        pizza.ingredients = ["Tomato", "Pork", "Beef"];
        const expectPrice = 13.8;

        expect(pizza.calcPrice().toBe(expectPrice));
       });
      it("when it's big pizza withthout ingredients", () => {
        const pizza = new Pizza();
        pizza.size = "little";
        pizza.ingredients = ["Tomato", "Pork", "Beef"];
        const expectPrice = 9;

        expect(pizza.calcPrice().toBe(expectPrice));
       });
    })
  });

  describe("#equals", () => {
    describe("show return true", () => {
      it("when two empty pizzas ara compare", () => {
        const pizza1 = new Pizza();
        const pizza2 = new Pizza();
      });
      
      it("when two pizzas have the same ingredients (2), size, and name", () => {
        const pizza1 = new Pizza();
        const pizza2 = new Pizza();

        const pizzaValue = {
          name: "tes1",
          ingredients: ["cheese", "bacon"],
          size: "big"
        };
        pizza1.name = pizzaValue.name;
        pizza1.ingredients = pizzaValue.ingredients;
        pizza1.size = pizzaValue.size;
        
      });
      describe("should return false", () => {
        it("when two pizza have different size", () => {
          const pizza1 = new Pizza();
          pizza1.size = "little";
          const pizza2 = new Pizza();
          pizza2.size = "medim";
        });
      });
      describe("should ")
    });
  });
});
function PizzaService(pizzas, ingredients) {
  this._pizzas = pizzas; //[key : string]: Pizza
  this._pizzaSelected = new Pizza();
  this._ingredients = ingredients;
}

PizzaService.prototype = {
  get pizzas() {
    return this._pizzas;
  },
  set pizza(pizzas) {
    this._pizzas = pizzas.map(pizza => new Pizza(pizzas))
  },
  get ingredients() {
    return this._ingredients;
  },
  set ingredients(ingredients) {
    this._ingredients = ingredients;
  },
  get pizzaSelected() {
    return this._pizzaSelected;
  },
  set pizzaSelected(pizza) {
    this._pizzaSelected = Object.assign(new Pizza(), pizza);
  }
}

PizzaService.prototype.addIngredient = function (ingredients) {
  this.pizzaSelected.addIngredient(ingredients);
}

PizzaService.prototype.removeIngredient = function (ingredients) {
  this.pizzaSelected.removeIngredient(ingredients);
}

// PizzaService.prototype.getPizza = function (namePizza) {
//   return this.pizza[namePizza];
// }

// PizzaService.prototype.setPizza = function(name, pizza) {
//   if (this.pizzas[name]) {
    
//   }
// }
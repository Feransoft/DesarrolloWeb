/* Esto hay que refactorizarlo a no recibir parametros sueltos
ObjectPlainToPrototype 

*/

function Pizza(pizza = {}) {
  const { name = "noname", ingredients = [], size = "medium", img="./assets/No_Pictures.jpg" } = pizza;
  this._name = name;
  this._ingredients = ingredients;
  this._size = size; //Enums
  // this._price = price;
  this._priceBase = 7;
  this._img = img;
}

Pizza.prototype = {
  get name() {
    return this._name;
  },
  set name(name) {
    this._name = name;
  },
  get ingredients() {
    return this._ingredients;
  },
  set ingredients() {
    this._ingredients = Array.from.apply(ingredients);
  },
  get size() {
    return this._size = size; 
  },
  set size() {
    if (size === "little") {
      this._priceBase = 5;
    } else if (size === "little") {
      this._priceBase = 7;
    } else {
      this._priceBase = 9;
    }
  },
  get priceBase() {
    return this.priceBase;
  },
  set priceBase(priceBase) {
    throw new Error("Pizza: There are forbiden");
  },
  get img() {
    return this._img;
  },
  set image(imgSrc)  {
    this._img = imgSrc;
  },
  get price() {
    return this.calcPrice;
  },
  set price(price) {
    throw new Error("Pizza: There ara forbiden modifu Price Pizza")
  },
  get has(){
    return `${this.name}${this.ingredients.join(', ')}${this.size}`;
  }
} 

Pizza.prototype.equals = function (pizza) {
  return this.hash === pizza.hash;
}

Pizza.prototype.calcPrice = function () {
  if (this._size === "little") {
    this._priceBase + this._ingredients.length * 1.2;
  } else if (this._size === "medium") {
    this._priceBase + this._ingredients.length * 4;
  } else {
    this._priceBase + this._ingredients.length * 8;
  }
}

Pizza.prototype.addIngredient = function (ingredients) {
  return this.ingredients.push(ingredients);
}

Pizza.prototype.removeIngredient = function(ingredients) {
  const index = this.ingredients.indexOf(ingredients);
  if (index === -1) {
    throw new Error ("Ingredient nof found in this pizza")
  }
}

Pizza.prototype.calcPrice = function () {
  return this.priceBase * this.size;
}


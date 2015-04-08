function Ingredient(name, price) {
    "use strict";

    this.name = name;
    this.price = price;

    this.calcPrice = function() {
        return this.price;
    };

    this.toString = function() {
        return this.name + " costs: " + this.price
    };
}
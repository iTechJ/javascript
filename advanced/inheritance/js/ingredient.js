function Ingredient (name, price) {
    "use strict";
    this.name = name;
    this.price = price? price:0;
}

Ingredient.prototype = {
    constructor: Ingredient,

    calcPrice: function() {
        return this.price;
    },

    toString: function () {
        return this.name + " costs: " + this.price;
    }
};
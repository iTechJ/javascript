function Ingredient(name, price) {
    "use strict";
    var self = {
        name: name,
        price: price,

        calcPrice: function() {
            return this.price;
        },

        toString: function () {
            return this.name + " costs: " + this.price
        }
    };

    self.constructor = Ingredient;

    return self;
}

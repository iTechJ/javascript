function Fish(name, price, esculent) {
    "use strict";
    Ingredient.call(this, name, price);
    var spice = [];
    this.esculent = esculent;

    this.addSpice = function(ingredient) {
        spice.push(ingredient);
    };

    this.calcPrice = (function(base) {
        return function() {
            var total = 0,
                i,
                length = spice.length;

            for(i=0; i< length; i++) {
                total += spice[i].price;
            }
            return base() + total;
        }
    })(this.calcPrice.bind(this));

    this.toString = (function(base) {
        return function() {
            return base() + this.esculent? "esculent": "not esculent";
        }
    })(this.toString.bind(this));
}
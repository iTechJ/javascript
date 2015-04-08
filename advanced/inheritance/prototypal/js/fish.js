function Fish(name, price, esculent) {
    "use strict";
    var base = new Ingredient(name, price),
        self = object(base),
        spice = [];

    self.esculent = esculent;

    self.addSpice = function(ingredient) {
        "use strict";
        spice.push(ingredient);
    };

    self.calcPrice = function() {
        "use strict";
        var total = 0,
            i,
            length = spice.length;

        for(i=0; i< length; i++) {
            total += spice[i].price;
        }
        return base.calcPrice() + total;
    };

    self.toString = function() {
        return base.toString +  + ", " + self.esculent? "esculent": "not esculent";
    };

    self.constructor = Fish;
    return self;
}
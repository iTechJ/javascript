function Sushi(rice, nori, sauce, wasabi) {
    "use strict";
    var i,
        length = arguments.length,
        self,
        ingredients = [];

    for(i=0; i< length; i++) {
        if(!arguments[i] instanceof Ingredient) {
            throw "One or more components are not ingredients";
        }
        ingredients.push(arguments[i]);
    }

    if(!rice || !nori || !sauce || !wasabi) {
        throw "Not all mandatory ingredients are added !!!";
    }

    self = {
        getTotalPrice: function() {
            "use strict";
            var total = 0,
                i,
                length = ingredients.length;

            for(i=0; i< length; i++) {
                total += ingredients[i].calcPrice();
            }
            return total;
        },

        addIngredient: function(ingredient) {
            "use strict";
            if(!ingredient instanceof Ingredient) {
                throw ingredient + "is not an ingredients";
            }
            if(ingredient instanceof Fish && !ingredient.esculent)  {
                throw "Fish is not esculent";
            }
            ingredients.push(ingredient);
        },
        toString: function () {
            return "Sushi costs " + self.getTotalPrice();
        }
    };

    self.constructor = Sushi;
    return self;
}
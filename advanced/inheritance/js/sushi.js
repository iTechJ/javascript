function Sushi(rice, nori, sauce, wasabi) {
    "use strict";
    var i,
        length = arguments.length;

    if(!rice || !nori || !sauce || !wasabi) {
        throw "Not all mandatory ingredients are added !!!";
    }

    this._ingredients = [];

    for(i=0; i< length; i++) {
        if(!arguments[i] instanceof Ingredient) {
            throw "One or more components are not ingredients";
        }
        this._ingredients.push(arguments[i]);
    }
}

Sushi.prototype = {
    constructor: Sushi,
    getTotalPrice: function() {
        "use strict";
        var total = 0,
            i,
            length = this._ingredients.length;

        for(i=0; i< length; i++) {
            total += this._ingredients[i].calcPrice();
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

        this._ingredients.push(ingredient);
    },

    toString: function() {
        "use strict";
        return "Sushi costs " + this.getTotalPrice();
    }
};
function Sushi(rice, nori, sauce, wasabi) {
    "use strict";
    var i,
        length = arguments.length,
        ingredients = [];

    if(!rice || !nori || !sauce || !wasabi) {
        throw "Not all mandatory ingredients are added !!!";
    }

    for(i=0; i< length; i++) {
        if(!arguments[i] instanceof Ingredient) {
            throw "One or more components are not ingredients";
        }
        ingredients.push(arguments[i]);
    }

    this.addIngredient = function (ingredient) {
        if(!ingredient instanceof Ingredient) {
            throw ingredient + "is not an ingredients";
        }
        if(ingredient instanceof Fish && !ingredient.esculent)  {
            throw "Fish is not esculent";
        }
        ingredients.push(ingredient);
    };

    this.getTotalPrice = function() {
        var total = 0,
            i,
            length = ingredients.length;

        for(i=0; i< length; i++) {
            total += ingredients[i].calcPrice();
        }
        return total;
    };

    this.toString = function() {
        return "Sushi costs " + this.getTotalPrice();
    }
}
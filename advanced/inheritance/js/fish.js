/*globals Ingredient, extend*/
function Fish(name, price, esculent) {
    "use strict";
    Fish.superclass.constructor.call(this, name, price);
    this.esculent = esculent;
    this._spice = [];
}

extend(Fish, Ingredient);

Fish.prototype.addSpice= function(ingredient) {
    "use strict";
    if(ingredient instanceof Ingredient) {
        this._spice.push(ingredient);
    }
};

Fish.prototype.calcPrice = function() {
    "use strict";
    var total = 0,
        i,
        length = this._spice.length;

    for(i=0; i< length; i++) {
        total += this._spice[i].price;
    }

    return Fish.superclass.calcPrice.call(this) + total;
};

Fish.prototype.toString = function() {
    "use strict";
    return Fish.superclass.toString.call(this) + ", " + this.esculent? "esculent": "not esculent";
};
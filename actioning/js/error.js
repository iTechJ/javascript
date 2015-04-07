/*globals itechart, extend*/
itechart.error = function(selector){
    "use strict";
    itechart.error.superclass.constructor.call(this, selector);

    this.forEach(function(elt){
        var component = elt.getElementsByClassName("rp-component")[0];
        component.addClassName("rp-error");
    });

};

extend(itechart.error, itechart.rpComponent);
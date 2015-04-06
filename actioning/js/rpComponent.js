var itechart = {};
itechart.rpComponent = function (selector, className) {
    "use strict";
    if(!selector) {
        throw "No selector defined!";
    }

    var self = this,
        componentList = document.querySelectorAll(selector),
        forEach = Array.prototype.forEach;

    forEach.call(componentList, function(elt){
        
        //console.log(elt);
        //elt.addEventListener("click", function() {
        //    elt.parentNode.appendChild(elt.cloneNode(true));
        //}, false);

    });
};

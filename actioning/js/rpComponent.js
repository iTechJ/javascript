var itechart = {};
itechart.rpComponent = function (selector) {
    "use strict";
    if(!selector) {
        throw "No selector defined!";
    }

    var self = this;

    //self.forEach =
    self.componentList = document.querySelectorAll(selector);

    Array.prototype.forEach.call(self.componentList, function(elt){
        var header = document.createElement("h2"),
            body = document.createElement("p"),
            close = document.createElement("div");

        close.className = "rp-close";
        close.textContent = "x";
        close.innerText = "x";

        elt.className = elt.className + " rp-component";
        elt.appendChild(header);
        elt.appendChild(body);
        elt.appendChild(close);

    });
};

//rpApp.BaseComponent.prototype = {
//    constructor: itechart.rpComponent,
//
//    show: function() {
//        "use strict";
//        throw "Component needs implementation!";
//    }
//
//    hide: function(){
//
//    }
//};
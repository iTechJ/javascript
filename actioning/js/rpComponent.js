var itechart = {};
itechart.rpComponent = function (selector) {
    "use strict";
    if(!selector) {
        throw "No selector defined!";
    }

    var self = this;

    self.componentList = document.querySelectorAll(selector);

    self.forEach(function(elt){
        var container = render();
        elt.appendChild(container);
        subscribe(elt);
    });

    self._toggleVisibility = function(tag, show) {
        var visible = "rp-visible",
            component = tag.getElementsByClassName("rp-component")[0];
        if(show) {
            component.removeClassName("rp-hidden");
            component.addClassName(visible);
        } else {
            component.removeClassName(visible);
        }
    };

    function render(){
        var container = document.createElement("div"),
            header = document.createElement("h2"),
            body = document.createElement("p"),
            close = document.createElement("div");

        close.className = "rp-close";
        close.textContent = "x";
        close.innerText = "x";

        container.className += " rp-component";
        container.appendChild(header);
        container.appendChild(body);
        container.appendChild(close);

        return container;
    }

    function subscribe(elt){

        var component = elt.getElementsByClassName("rp-component")[0];
        elt.getElementsByClassName("rp-close").item(0).addEventListener("click", function() {
            self._toggleVisibility(elt, false);
        }, false);

        component.addEventListener("transitionend", function(){
            if(!this.hasClassName("rp-visible")) {
                this.addClassName("rp-hidden");
            }
        }, false);
    }

    return self;
};

itechart.rpComponent.prototype = {
    constructor: itechart.rpComponent,

    show: function() {
        "use strict";
        var self = this;
        this.forEach(function(elt) {
            self._toggleVisibility(elt, true);
        });
    },

    hide: function(){
        "use strict";
        var self = this;
        this.forEach(function(elt) {
            self._toggleVisibility(elt, false);
        });
    },

    forEach: function(f) {
        "use strict";
        Array.prototype.forEach.call(this.componentList, f);
    }
};
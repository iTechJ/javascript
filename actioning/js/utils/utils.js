var rpApp = {};

rpApp.callback = function Callback(fn, scope, args) {
    "use strict";
    this.fn = fn;
    this.scope = scope;
    this.parameters = parameters;
};

rpApp.extend = function(Child, Parent) {
    "use strict";
    var F = function () { };
    F.prototype = Parent.prototype;

    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
};

rpApp.mergeLeft = function(first, second) {
    "use strict";

    if(!second) {
        return first;
    }

    var o = {};

    for (var property in first) {
        if (first.hasOwnProperty(property)) {
            o[property] = second[property] ? second[property] : first[property];
        }
    }
    return o;
};

var TODO = "Not implemented yet";

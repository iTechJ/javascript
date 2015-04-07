function extend(Child, Parent) {
    "use strict";
    var F = function () { };
    F.prototype = Parent.prototype;

    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
}

function mergeLeft(first, second) {
    "use strict";
    var o = {};

    if(!second) {
        return first;
    }

    for (var property in first) {
        if (first.hasOwnProperty(property)) {
            o[property] = second[property] ? second[property] : first[property];
        }
    }
    return o;
}

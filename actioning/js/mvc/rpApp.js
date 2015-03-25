var rpApp = {
    launch: function(globals){
        "use strict";

        function namespace(aggr, parts) {
            if(!parts || parts.length == 0) return aggr;
            aggr[parts[0]] = aggr[parts[0]] || {};
            namespace(aggr[parts[0]], parts.slice(1));
        }

        var defaults = {
                "name": "rpApp application",
                "namespace": ""
            },
            parts;

        rpApp.globals = rpApp.mergeLeft(defaults, globals);
        var namespace = namespace(window, rpApp.globals.namespace.split("."));
        console.log(namespace);
        window[namespace].viewport = new rpApp.Viewport();



    },
    define: function(name, settings) {
        if(!rpApp.globals.namespace[settings.extend]) throw "rpApp.define: no component is defined!";
        //todo: add check for name uniqueness

        window[rpApp.globals.namespace[name]] = function(settings) {
            "use strict";

//            this.__proto__.constructor.superclass.constructor.call(this, settings);


//            var defaults = {
//                "class": "rp-viewport",
//                "id": "rpViewport",
//                "views": [
//                ]
//            };
//
//            this.settings = rpApp.mergeLeft(defaults, settings);
//            this.render();
        };

        //TODO: apply things, which make widget unique;
        //todo: add new features

    },
    create: function(name) {
        var _object = rpApp.globals.namespace
        if(!_object) throw "rpApp.create: invalid name"
        return new _object[name]();
    },
    mergeLeft: function(first, second) {
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
    },
    extend: function(Child, Parent) {
        "use strict";
        var F = function () { };
        F.prototype = Parent.prototype;

        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.superclass = Parent.prototype;
    }

};

rpApp.callback = function Callback(fn, scope, args) {
    "use strict";
    this.fn = fn;
    this.scope = scope;
    this.parameters = parameters;
};

var TODO = "Not implemented yet";
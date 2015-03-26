var rpApp = (function () {
    "use strict";
    var ns;

    function launch(globals, viewport){
        "use strict";

        function namespace(aggr, parts) {
            if(!parts || parts.length == 0) {
                return aggr;
            }
            aggr[parts[0]] = aggr[parts[0]] || {};
            return namespace(aggr[parts[0]], parts.slice(1));
        }

        var defaults = {
            "name": "rpApp application",
            "namespace": ""
        };

        rpApp.globals = rpApp.mergeLeft(defaults, globals);
        ns = namespace(window, rpApp.globals.namespace.split("."));
        ns.viewport = create("Viewport");
    }

    function define(name, settings) {
        
//        if(rpApp.globals.namespace[settings.extend]) {//todo: fix it;
//        } throw "rpApp.define: no component is defined!";

        if (ns[name]) throw "rpApp.define: name " + name + " is already in use";
        //todo: check for uniqueness of id, name...
        ns[name] = function() {
            "use strict";

            var _wd = rpApp[type] ? rpApp[type][name] : rpApp[name];
            ns[name] = _wd[settings.extend](settings);

//            this.__proto__.constructor.superclass.constructor.call(this, settings);
//            var defaults = {
//                "class": "rp-viewport",
//                "id": "rpViewport",
//                "views": [
//                ]
//            };
//            this.settings = rpApp.mergeLeft(defaults, settings);
//            this.render();

        };

        //TODO: apply things, which make widget unique;
        //todo: add new features
    }

    function create(name, settings, type) {
        var _object = typeof ns[name] === "function" ? ns[name] : (rpApp[type] ? rpApp[type][name] : rpApp[name]);
        if(!_object) throw "rpApp.create: invalid name";
        return new _object(settings);
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

    function extend(Child, Parent) {
        "use strict";
        var F = function () { };
        F.prototype = Parent.prototype;

        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.superclass = Parent.prototype;
    }

    return {
        "extend": extend,
        "mergeLeft": mergeLeft,
        "create": create,
        "define": define,
        "launch": launch
    };

})();

rpApp.model = {};
rpApp.view = {
    "components": {}
};
rpApp.controller = {};

    
rpApp.callback = function Callback(fn, scope, parameters) {
    "use strict";
    this.fn = fn;
    this.scope = scope;
    this.parameters = parameters;
};

var TODO = "Not implemented yet";
/* jshint strict: true */
var rpApp = (function () {
    "use strict";

    function namespace(ns) {
        function aux(aggr, parts){
            if(!parts || parts.length === 0) {
                return aggr;
            }
            aggr[parts[0]] = aggr[parts[0]] || {};
            return aux(aggr[parts[0]], parts.slice(1));
        }
        return aux(window, ns.split("."));
    }

    function set(name, value, safely) {
        var widgetIndex = name.lastIndexOf("."),
            widgetName = name.substr(widgetIndex + 1),
            widgetNs = name.substring(0, widgetIndex),
            ns = namespace(widgetNs);

        if(safely && Object.getOwnPropertyNames(ns).length !== 0) {
            throw ("rpApp.define: name " + name + " is already in use");
        }

        ns[widgetName] = value;

        return ns[widgetName];
    }

    function launch(globals, viewport){

        var defaults = {
                "name": "rpApp application",
                "namespace": ""
            },
            ns = namespace(viewport.namespace);

        rpApp.globals = rpApp.mergeLeft(defaults, globals);
        ns.viewport = new rpApp.Viewport(viewport);
    }

    function define(name, settings) {
        //todo: check for uniqueness of id, name...
        //TODO: apply things, which make widget unique;
        //todo: add new features
        var ext = set(name, function() {
            Object.getPrototypeOf(this).constructor.superclass.constructor.call(this, settings);
            //this.__proto__.constructor.superclass.constructor.call(this, settings);
        });

        rpApp.extend(ext, namespace(settings.extends));

    }

    function create(name) {
        var Named = namespace(name);
        if(!Named) {
            throw "rpApp.create: invalid name: " + name;
        }

        return new Named();
    }

    function mergeLeft(first, second) {
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

Element.prototype.hasClassName = function(name) {
    "use strict";
    return new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)").test(this.className);
};

Element.prototype.addClassName = function(name) {
    "use strict";
    if (!this.hasClassName(name)) {
        this.className = this.className ? [this.className, name].join(' ') : name;
    }
};

Element.prototype.removeClassName = function(name) {
    "use strict";
    if (this.hasClassName(name)) {
        var c = this.className;
        this.className = c.replace(new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)", "g"), "");
    }
};

var TODO = "Not implemented yet";
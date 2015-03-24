/* jshint strict: true */
/* globals rpApp */

rpApp.Viewport = function(settings) {
    "use strict";

    var defaults = {
        "class": "rp-viewport",
        "views": []
    };

    this.settings = rpApp.mergeLeft(defaults, settings);

};

rpApp.extend(rpApp.Viewport, rpApp.BaseComponent);

rpApp.Viewport.prototype.render = function() {
    "use strict";
    var container = document.createElement("DIV");

    container.setAttribute("")
    
    /*
        TODO: iterate through the views and add them to the container
        each element is configured, and should be rendered based on this configuration.
    */

    // return Fish.superclass.toString.call(this) + ", " + this.esculent? "esculent": "not esculent";
};
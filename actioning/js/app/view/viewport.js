/* jshint strict: true */
/* globals rpApp */

rpApp.Viewport = function(views) {
    "use strict";
    this.views = views ? views : [];
};

rpApp.extend(rpApp.Viewport, rpApp.BaseComponent);

rpApp.Viewport.prototype.render = function() {
    "use strict";
    var container = document.createElement("DIV");
    
    /*
        TODO: iterate through the views and add them to the container
        each element is configured, and should be rendered based on this configuration.
    */

    // return Fish.superclass.toString.call(this) + ", " + this.esculent? "esculent": "not esculent";
};
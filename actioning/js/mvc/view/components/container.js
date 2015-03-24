/* jshint strict: true */
/* globals rpApp */

rpApp.View = function(settings) {
    "use strict";

    var defaults = {
        "class": "rp-viewport",
        "id": "rpViewport",

    };

    this.settings = rpApp.mergeLeft(defaults, settings);
    this.render();
};

rpApp.extend(rpApp.Viewport, rpApp.BaseComponent);

rpApp.Viewport.prototype.render = function() {
    "use strict";
    var viewport = document.createElement("DIV");

    viewport.id = this.settings.id;
    viewport.setAttribute("class", this.settings.class);

    /*
     TODO: iterate through the views and add them to the container
     each element is configured, and should be rendered based on this configuration.
     */

    document.body.innerHTML = "";
    document.body.appendChild(viewport);



    // return Fish.superclass.toString.call(this) + ", " + this.esculent? "esculent": "not esculent";
};

/* jshint strict: true */
/* globals rpApp */

rpApp.View = function(settings) {
    "use strict";

    var defaults = {
        "class": "rp-view",
        "id": "view"
    };

    return function() {//TODO: update
        this.settings = rpApp.mergeLeft(defaults, settings); //todo: put into parent component
        this.render(); //todo: put into parent component;
    }

};

rpApp.extend(rpApp.Viewport, rpApp.BaseComponent);

rpApp.View.prototype.render = function() {
    "use strict";
    var view = document.createElement("DIV");

    view.id = this.settings.id;
    view.setAttribute("class", this.settings.class);

    /*
     TODO: iterate through the views and add them to the container
     each element is configured, and should be rendered based on this configuration.
     */
    // return Fish.superclass.toString.call(this) + ", " + this.esculent? "esculent": "not esculent";

    document.body.innerHTML = "";
    parent.appendChild(view);


};

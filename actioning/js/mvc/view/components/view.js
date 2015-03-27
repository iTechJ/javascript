/* jshint strict: true */
/* globals rpApp */

rpApp.view.components.View = function(settings) {
    "use strict";

    var defaults = {
            "class": "rp-view",
            "id": "view"
        },
        self = this;

    function View() {
        this.settings = rpApp.mergeLeft(defaults, settings); //todo: put into parent component
        self.render(); //todo: put into parent component;
    }

    return View;

};

rpApp.extend(rpApp.view.components.View, rpApp.BaseComponent);

rpApp.view.components.View.prototype.render = function() {
    "use strict";
    var view = document.createElement("DIV");

    view.id = this.settings.id;
    view.setAttribute("class", this.settings.class);

    // return Fish.superclass.toString.call(this) + ", " + this.esculent? "esculent": "not esculent";

    document.body.innerHTML = "";
    return view;

};

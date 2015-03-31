/* jshint strict: true */
/* globals rpApp */

rpApp.view.components.Container = function(settings) {
    "use strict";

    var defaults = {
        "class": "rp-container",
        "id": "",
        "period": 30
    };

    rpApp.view.components.Container.superclass.constructor.call(this, defaults, settings);
};

rpApp.extend(rpApp.view.components.Container, rpApp.BaseComponent);

rpApp.view.components.Container.prototype.render = function() {
    "use strict";
    var view = document.createElement("DIV");

    view.id = this.settings.id;
    view.setAttribute("class", this.settings.class);

    view.style.width= "100%";
    view.style.height = "100%";
    view.style.opacity = "1.0";

    this.html = view;
    return view;
};
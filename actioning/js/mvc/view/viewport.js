/* jshint strict: true */
/* globals rpApp */

rpApp.Viewport = function(settings) {
    "use strict";

    var defaults = {
        "class": "rp-viewport",
        "title": "",
        "id": "rpViewport",
        "views": [
        ]
    };
    
    this.views = {};
    this.active = "";

    rpApp.Viewport.superclass.constructor.call(this, defaults, settings);
};

rpApp.extend(rpApp.Viewport, rpApp.BaseComponent);

rpApp.Viewport.prototype.render = function() {
    "use strict";
    
    var self = this, 
        viewport = document.createElement("div"),
        header = document.createElement("h1"),
        views = this.settings.views,
        i, lth;

    /*adding viewport styles/attributes */
    viewport.id = this.settings.id;
    viewport.setAttribute("class", this.settings.class);

    /*adding app header styles/attributes*/
    if(this.settings.title) {
        header.innerText = this.settings.title;
        header.textContent = this.settings.title;
    }
    viewport.appendChild(header);

    /* iterates through view list and adds them to container */
    for(i = 0, lth = views.length; i < lth; i++) {
        var obj = rpApp.create(views[i]);
        self.views[obj.settings.id] = obj;
    }

    //todo: remove it;
    viewport.appendChild(obj.render());
    // rpApp.create("BookList", {});

    document.body.innerHTML = "";
    document.body.appendChild(viewport);

    // return Fish.superclass.toString.call(this) + ", " + this.esculent? "esculent": "not esculent";
};


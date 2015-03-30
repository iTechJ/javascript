/* jshint strict: true */
/* globals rpApp */

rpApp.view.components.View = function(settings) {
    "use strict";

    var defaults = {
        "class": "rp-view",
        "id": "view",
        "period": 30
    };
    rpApp.view.components.View.superclass.constructor.call(this, defaults, settings);

};

rpApp.extend(rpApp.view.components.View, rpApp.BaseComponent);

rpApp.view.components.View.prototype.render = function() {
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

rpApp.view.components.View.prototype.fold = function(){
    var self = this,
        foldAnimation = setInterval(function(){
            var width = self.html.style.width,
                height = self.html.style.height,
                wPercent = width.indexOf("%"),
                hPercent = height.indexOf("%"),
                widthValue,
                heightValue;

            if(hPercent === -1 || wPercent === -1) {
                clearInterval(foldAnimation);
                throw "view size should be set in percents!";
            }

            widthValue = Number(width.substring(0, wPercent));
            heightValue = Number(height.substring(0, hPercent));

            if(heightValue > 0 || heightValue > 0) {
                self.html.style.height = (heightValue > 0 ? heightValue - 5 : 0) + "%";
                self.html.style.width = (widthValue > 0 ? widthValue - 5 : 0) + "%";
            } else {
                clearInterval(foldAnimation);
                self.unFold();
            }
        }, self.settings.period);
};

rpApp.view.components.View.prototype.unFold = function(){
    var self = this,
        unFoldAnimation = setInterval(function(){
            var width = self.html.style.width,
                height = self.html.style.height,
                wPercent = width.indexOf("%"),
                hPercent = height.indexOf("%"),
                widthValue,
                heightValue;

            if(hPercent === -1 || wPercent === -1) {
                clearInterval(unFoldAnimation);
                throw "view size should be set in percents!";
            }

            widthValue = Number(width.substring(0, wPercent));
            heightValue = Number(height.substring(0, hPercent));
            console.log(widthValue);
            if(widthValue < 100 || heightValue < 100) {
                self.html.style.height = (heightValue < 100 ? heightValue + 5 : 100) + "%";
                self.html.style.width = (widthValue < 100 ? widthValue + 5 : 100) + "%";
            } else {
                clearInterval(unFoldAnimation);
            }
        }, self.settings.period);
};

rpApp.view.components.View.prototype.fadeOut = function(){
    var self = this,
        fadeOutAnimation = setInterval(function(){
            var opacity = parseFloat(self.html.style.opacity);

            if(opacity > 0) {
                self.html.style.opacity = opacity - 0.1;
            } else {
                clearInterval(fadeOutAnimation);
                self.fadeIn();
            }
        }, self.settings.period);
};

rpApp.view.components.View.prototype.fadeIn = function(){
    var self = this,
        fadeInAnimation = setInterval(function(){
            var opacity = parseFloat(self.html.style.opacity);

            if(opacity >= 1) {
                clearInterval(fadeInAnimation);
            } else {
                self.html.style.opacity = opacity + 0.1;
            }
        }, self.settings.period);
};

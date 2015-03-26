/* jshint strict: true */
/* globals rpApp */

rpApp.BaseComponent = function() {
    "use strict";
    //todo: fix it;
    var defaults = {
        "type": ""
    }
    
};

rpApp.BaseComponent.prototype = {
    constructor: rpApp.BaseComponent,

    render: function() {
        "use strict";
        throw "Component needs implementation!";
    }
};
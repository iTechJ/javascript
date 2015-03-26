/* jshint strict: true */
/* globals rpApp */

window.onload = function() {
    "use strict";

    var viewport = {
        id: "myApp",
        views: [
            "BookList"
        ]
    };

    rpApp.launch({
        "name": "My MVC application",
        "namespace": "itechart.mvc.project"
    }, viewport);

};
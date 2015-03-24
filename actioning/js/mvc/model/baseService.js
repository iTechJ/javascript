/* jshint strict: true */
/* globals rpApp */

rpApp.ajax = function(settings) {
    "use strict";
    
    var self = this,
        defaults = {
            "type": "GET",
            "url": "",
            "data": {},
            "dataType": "text",
            "success": null,
            "error": null,
            "always": null,
            "reply": "reply",
            "cached": true
        },
        applySettings = rpApp.mergeLeft(defaults, settings),
        xmlHttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    
    xmlHttp.onreadystatechange = function() {
        var s,
            params = {};

        if (xmlHttp.readyState == 4 && xmlHttp.status == 200 && applySettings.success) {
            s = applySettings.success;
        } else if(applySettings.error) {
            s = applySettings.error;
        }
        
        if(s) {
            params = s.params;
            if(xmlHttp.response) params[s.reply] = xmlHttp.response;
            s.fn.apply(s.scope ? s.scope : self, [params]);            
        }
        
        if(applySettings.always) {
            params = applySettings.always.params;
            if(xmlHttp.response) params[s.reply] = xmlHttp.response;
            applySettings.always.fn.apply(applySettings.always.scope ? applySettings.always.scope : self, [params]);
        }

    };
    
    xmlHttp.open(applySettings.type,
        applySettings.cached ? applySettings.url : applySettings.url + "?_c=" + Math.random(),
        true);

    xmlHttp.responseType = applySettings.type;
    xmlHttp.send();

};
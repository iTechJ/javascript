var rpAjax = {};

rpAjax.get = function(path, callback, cached) {
    "use strict";
    var xmlHttp;
    if (window.XMLHttpRequest) {
        /**
         * IE7+, Firefox, Chrome, Opera, Safari
         */
        xmlHttp=new XMLHttpRequest();
    } else {
        /**
         * code for IE6, IE5
         */
        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }



    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState===4 && xmlHttp.status===200) {
            callback(xmlHttp);
//            document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        }
    };

    xmlHttp.open("GET",
        cached ? path : path + "?_c=" + Math.random(),
        true);

    xmlHttp.setRequestHeader("Content-type", "application/json");
    xmlHttp.responseType = "json";
    xmlHttp.send();
};



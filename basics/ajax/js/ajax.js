var rpAjax = {};

rpAjax.get = function(path, callback) {
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
        if (xmlHttp.readyState==4 && xmlHttp.status==200) {
            callback(xmlHttp);
//            document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        }
    };

    xmlHttp.open("GET", path, true);
    xmlHttp.send();
};



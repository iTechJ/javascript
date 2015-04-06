/*globals rpAjax*/
window.onload = function() {
    "use strict";
    var button = document.getElementById("ajax"),
        container = document.getElementById("rpContainer");

    button.addEventListener("click", function() {
        rpAjax.get("js/data.json", function(result){
            try {
                container.innerHTML = '';
            } catch(e) {
                while(container.firstChild) {
                    container.removeChild(container.firstChild);
                }
            }
            var data = result.response;
            var list = document.createElement("div");
            for(var i = 0, lth = data.length; i < lth; i++) {
                var item = data[i],
                    priceContainer = document.createElement("p"),
                    priceText = document.createTextNode(item.product + " " + item.price);

                priceContainer.appendChild(priceText);
                list.appendChild(priceContainer);
            }

            container.appendChild(list);
        }, false);
    });
};

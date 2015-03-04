window.onload = function (){
    "use strict";
    var forEach = Array.prototype.forEach,
        buttons1 = document.querySelectorAll(".rpContainer1 .rpButton"),
        rpContainer2 = document.querySelector(".rpContainer2");
    
    /**
     * Adds event listener for each element of node list
     */
    forEach.call(buttons1, function(elt){
        elt.addEventListener("click", function() {
            elt.parentNode.appendChild(elt.cloneNode(true));
        }, false);
    });
    
    /**
     * Adds event listener for containing element
     */
    rpContainer2.addEventListener("click", function(evt) {
        var elt = evt.target;
        if(elt.className === "rpButton") {
            elt.parentNode.appendChild(elt.cloneNode(true));
        }
    }, true);
    
};
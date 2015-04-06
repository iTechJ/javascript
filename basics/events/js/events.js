/*globals console*/
window.onload = function (){
    "use strict";
    var forEach = Array.prototype.forEach,
        buttons1 = document.querySelectorAll(".rpContainer1 .rpButton"),
        rpContainer2 = document.querySelector(".rpContainer2"),
        rpContainer3 = document.querySelector(".rpContainer3"),
        rpContainer4 = document.querySelector(".rpContainer4");
    
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
    }, false);

    /**
     * Bubbling vs Capturing
     */
    rpContainer3.addEventListener("click", function(){
        console.log("one");
    }, true);

    rpContainer4.addEventListener("click", function(){
        console.log("two");
    }, true);
    
};
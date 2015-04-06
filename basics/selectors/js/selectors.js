/**
 * finds tags by selectors and applies random styles 
 */
function applySelectors() {
    "use strict";
    var byId = document.getElementById("rpClasses"),
        byTag = document.getElementsByTagName("p")[0],
        byClassName = document.getElementsByClassName("rpClasses")[0],
        bySelector = document.querySelector(".rpContainer .rpInner");
    
    update(byId);
    update(byTag);
    update(byClassName);
    update(bySelector);

}

/**
 * adds random style to the given tag 
 */
function update(tag) {
    "use strict";
    tag.style.color = generateColor();
    tag.style.fontSize = generateFontSize() + "px";
}

/**
 * generates random color 
 */
function generateColor() {
    "use strict";
    return "#" + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1,6);
}

/**
 * generates random font size 
 */
function generateFontSize() {
    "use strict";
    var availableSizes = [10, 12, 14, 16, 18, 20, 22, 24, 26];
    return availableSizes[Math.floor(Math.random() * availableSizes.length)];
}

window.onload = function() {
    "use strict";
    var activator = document.getElementById("rpActivate");
    
    // -- launches selector function      
    activator.onclick = function() {
        applySelectors();
    };
    
};
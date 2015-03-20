/**
 * example with counter
 */
function createCounter() {
    var numberOfCalls = 0;
    return function() {
        return ++numberOfCalls;
    }
}

var fn = createCounter();
fn(); //1
fn(); //2
fn(); //3
console.log(fn());


/**
 * partial application example with amplifier
 */
function amplifierBy(first) {
    return function(second) {
        return first * second;
    }
}

var by2 = amplifierBy(2);
var by1000 = amplifierBy(1000);

console.log(by2(3));
console.log(by1000(5));
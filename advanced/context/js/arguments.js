(function () {
    'use strict';

    var f = function (a, b, c) {
        return a + b + c;
    };

    var f1 = function (a, b, c) {
        return arguments[0] + arguments[1] + arguments[2];
    };

    var f2 = function (array) {
        var args = Array.prototype.slice.call(arguments),
            sum;
        sum = args.reduce(function (sum, x) {
            return sum + x;
        }, 0)

        return sum;
    };

    var output = [
        f(1, 2, 3),
        f1(1, 2, 3),
        f2(1, 2, 3, 4)
    ].join(',');

    console.log(output);

    /**
     * Another function for showing the arguments handling
     */
    var f = function Test(a) {

        var typeOf = typeof arguments;
        var type = Object.prototype.toString(arguments);
        var instanceOf = (arguments instanceof Array);
        var constructor = (arguments.constructor === Array);

        var numberOfExpectedParameters = f.length;
        var functionName = f.name;

        debugger;
    };

    f(1, 2, 3);





})();
var App = {};

App.Store = (function() {

    var internalStore = [];

    var ensureValid = function(value) {
        if (value < 0) {
            throw {
                type: 'ArgumentError',
                message: 'Argument is out of range.'
            };
        }
    };

    var add = function(value) {
        ensureValid(value);
        internalStore.push(value);
    };

    var toString = function() {
        return internalStore.toString();
    };


    return {
        add: add,
        toString: toString
    };

})();

App.Consumer = (function () {

    var publish = function() {
        var valuesToPublish = [1, 2, 3];

        valuesToPublish.forEach(function(x) {
            App.Store.add(x);
        });

        console.log(App.Store.toString());
    };


    return {
        publish: publish
    };

})();


(function() {
    App.Consumer.publish();
})();
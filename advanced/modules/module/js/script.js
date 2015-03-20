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


    return {
        add: function (value) {
            ensureValid(value);
            internalStore.push(value);
        },
        
        toString: function() {
            return internalStore.toString();
        }
    };

})();

App.Consumer = (function () {

    return {
        publish: function() {
            var valuesToPublish = [1, 2, 3];

            valuesToPublish.forEach(function(x) {
                App.Store.add(x);
            });

            console.log(App.Store.toString());
        }
    };

})();


(function() {
    App.Consumer.publish();
})();
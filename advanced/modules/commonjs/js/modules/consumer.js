var store = require('./store');


var publish = function() {
    var valuesToPublish = [1, 2, 3];

    valuesToPublish.forEach(function(x) {
        store.add(x);
    });

    console.log(store.toString());
};


module.exports = {
    publish: publish
};
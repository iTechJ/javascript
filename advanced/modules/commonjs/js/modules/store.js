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


module.exports = {
    add: add,
    toString: toString
};
function First(name){
    this._name = name;

    this.setName = function(newName){
        this._name = newName;
    };

    this.toString = function() {
        return "the first name is \"" + this._name + "\"";
    };
};

function Second(name){
    var self = this;

    this._name = name;
    self.toString = function() {
        return "the second name is \"" + this._name + "\"";
    };

    self.callMethodOfFirst = function(first, method, args) {
        first[method].apply(self, args);
    }
};

var first = new First("first");
var second = new Second("second");

second.callMethodOfFirst(first, "setName", ["changed"]);

console.log(first.toString());
console.log(second.toString());


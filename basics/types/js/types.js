// -- Strings

var orangeLiteral = "Orange";
var orangeObject = new String("Orange");

document.writeln("<b>STRINGS</b>");
document.writeln("<br>");
document.writeln("var orangeLiteral = \"Orange\";");
document.writeln("<br>");
document.writeln("var orangeObject = new String(\"Orange\");");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("orangeLiteral = " + orangeLiteral);
document.writeln("<br>");
document.writeln("the type of orangeLiteral is " + typeof orangeLiteral);
document.writeln("<br>");
document.writeln("orangeObject = " + orangeObject);
document.writeln("<br>");
document.writeln("the type of orangeObject is " + typeof orangeObject);
document.writeln("<br>");
document.writeln(" orangeLiteral == orangeObject is " + (orangeLiteral == orangeObject));
document.writeln("<br>");
document.writeln("orangeLiteral === orangeObject is " + (orangeLiteral === orangeObject));
document.writeln("<br>");
document.writeln("<br>");

// -- Numbers

var a = 0.1;
var b = 0.2;
var five = "5";
var four = "4";
document.writeln("<b>NUMBERS</b>");
document.writeln("<br>");
document.writeln("var a = 0.1;");
document.writeln("<br>");
document.writeln("var b = 0.2;");
document.writeln("<br>");
document.writeln("<br>");

document.writeln("a + b == 0.3 is " + (a + b == 0.3) );
document.writeln("<br>");
document.writeln("a * 10 + b * 10 == 0.3 * 10 is " + (a * 10 + b * 10 == 0.3 * 10));
document.writeln("<br>");
document.writeln("1/0 = " + 1/0);
document.writeln("<br>");
document.writeln("0/\"\" = " + 0/"");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("var five = \"5\";");
document.writeln("<br>");
document.writeln("var four = \"4\";");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("++five = " + ++five);
document.writeln("<br>");
document.writeln("four + 1 = " + (four + 1));
document.writeln("<br>");
document.writeln("<br>");

// -- Booleans

var bool1 = true;
var bool2 = !!"String";

document.writeln("<b>BOOLEAN</b>");
document.writeln("<br>");
document.writeln("var bool1 = true;");
document.writeln("<br>");
document.writeln("var bool2 = !!\"String\";");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("typeof bool1 is " + typeof bool1);
document.writeln("<br>");
document.writeln("typeof bool2 is " + typeof bool2);
document.writeln("<br>");
document.writeln("bool2 = " + bool2);
document.writeln("<br>");
document.writeln("\"\" == 0 is " + (""==0));
document.writeln("<br>");
document.writeln("<br>");


//Null & Undefined
document.writeln("<b>NULL & UNDEFINED</b>");
document.writeln(null == undefined);

document.writeln(null > 0);
document.writeln(null == 0);
document.writeln(null >= 0);

document.writeln(undefined > 0);
document.writeln(undefined == 0);
document.writeln(undefined >= 0);

//Object
document.writeln(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>> OBJECT");

obj1 = Object.create(Object.prototype, {
    key1 : {
        writable: true,
        configurable: true,
        value: "val1"
    },
    key2 : {
        writable: false,
        configurable: true,
        value: "val2"
    }
});

obj2 = {
    key1: "val1",
    key2: "val2"
};

document.writeln(obj2);
document.writeln(typeof obj1);
document.writeln(obj1.key1);
document.writeln(obj1["key1"]);

obj1.key2 = "new";
document.writeln(obj1.key2);

//Array
document.writeln(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ARRAY");

var arr1 = ["one", "two"];
//var arr2 = new Array();
document.writeln(arr1);
document.writeln(typeof arr1);
arr1.push("three");
document.writeln(arr1);

//Function
document.writeln(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FUNCTION");
var func = function(){
    document.writeln("ONE");
};
document.writeln(typeof func());
func();

var defFunc = function() {
    return function() {document.writeln("TWO");}
};
defFunc()();

//Regular expressions
document.writeln(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>> REGEXP");
document.writeln( /\s/.test("some string"));

//Date
document.writeln(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>> DATE");
var dt = new Date();
document.writeln(dt);
document.writeln(dt.getFullYear());

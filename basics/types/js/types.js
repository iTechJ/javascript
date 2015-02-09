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
document.writeln("<br>");
document.writeln("null == undefined is " + (null == undefined));
document.writeln("<br>");
document.writeln("null > 0 is " + (null > 0));
document.writeln("<br>");
document.writeln("null == 0 is " + (null == 0));
document.writeln("<br>");
document.writeln("null >= 0 is " + (null >= 0));
document.writeln("<br>");
document.writeln("undefined > 0 is " + (undefined > 0));
document.writeln("<br>");
document.writeln("undefined == 0 is " + (undefined == 0));
document.writeln("<br>");
document.writeln("undefined >= 0 is " + (undefined >= 0));
document.writeln("<br>");
document.writeln("<br>");

//Object
document.writeln("<b>OBJECT</b>");
document.writeln("<br>");

var obj1 = Object.create(Object.prototype, {
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

var obj2 = {
    key1: "val1",
    key2: "val2"
};

document.writeln("obj1 = " + JSON.stringify(obj1) );
document.writeln("<br>");
document.writeln("obj2 = " + JSON.stringify(obj2) );
document.writeln("<br>");
document.writeln("<br>");

document.writeln("typeof obj1 is " + typeof obj1);
document.writeln("<br>");
document.writeln("obj1.key1 is " + obj1.key1);
document.writeln("<br>");
document.writeln("obj1[\"key1\"] is " + obj1["key1"]);
document.writeln("<br>");

obj1.key2 = "new";

document.writeln("<br>");
document.writeln("obj1.key2 = \"new\";");
document.writeln("<br>");
document.writeln("obj1.key2 is " + obj1.key2);
document.writeln("<br>");
document.writeln("<br>");

//Array
document.writeln("<b>ARRAY</b>");
document.writeln("<br>");

var arr1 = ["one", "two"];
var arr2 = new Array();

document.writeln("var arr1 = [\"one\", \"two\"];");
document.writeln("var arr2 = new Array();");
document.writeln("<br>");
document.writeln("<br>");

document.writeln("arr1 is " + arr1);
document.writeln("<br>");
document.writeln("typeof arr1 is " + typeof arr1);
document.writeln("<br>");

arr1.push("three");

document.writeln("arr1.push(\"three\");");
document.writeln("<br>");
document.writeln("arr1 is " + arr1);
document.writeln("<br>");
document.writeln("<br>");

//Function
document.writeln("<b>FUNCTION</b>");
document.writeln("<br>");
var func = function(){
    document.writeln("ONE");
};
document.writeln("var func = function(){");
document.writeln("<br>&nbsp;&nbsp;&nbsp;&nbsp; document.writeln(\"ONE\");");
document.writeln("<br>};");
document.writeln("<br>");
document.writeln("<br>");

document.writeln("typeof func() is " + (typeof func));
document.writeln("<br>");
document.writeln("func(): ");
func();
document.writeln("<br>");
document.writeln("<br>");

var defFunc = function() {
    return function() {
        document.writeln("TWO");
    };
};

document.writeln("var defFunc = function() {");
document.writeln("<br>&nbsp;&nbsp;&nbsp;&nbsp;return function() {");
document.writeln("<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;document.writeln(\"TWO\");");

document.writeln("<br>");
document.writeln("<br>");
document.writeln("defFunc()(): ");

defFunc()();

document.writeln("<br>");
document.writeln("<br>");


//Regular expressions
document.writeln("<b>REGEXP</b>");
document.writeln("<br>");
document.writeln("/\\s/.test(\"some string\") is " + (/\s/.test("some string")));
document.writeln("<br>");
document.writeln("<br>");

//Date
document.writeln("<b></b>DATE");
document.writeln("<br>");

var dt = new Date();

document.writeln("var dt = new Date();");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("dt is " + dt);
document.writeln("<br>");
document.writeln("dt.getFullYear() is " + dt.getFullYear());
document.writeln("<br>");
document.writeln("<br>");

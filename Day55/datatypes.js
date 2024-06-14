var n = 123;
n = 12.345;
// We can assigned any value to variable because by default they are any type
console.log(NaN + 1);
console.log(3 * NaN);
console.log(Math.pow(NaN, 0));
console.log(Math.pow(NaN, 1));
//BigInt
console.log(9007199254740991 + 1);
console.log(9007199254740991 + 2);
// string
var str1 = "Hello";
var str2 = 'World';
var str3 = "I write ".concat(str1, " ").concat(str2, ".");
var a = "Result ".concat(2 + 3);
// Boolean
var nameFieldChecked = true;
var ageFieldChecked = false;
console.log(5 > 3);
// Null 
var aged = null;
console.log(aged);
var myName;
//console.log(myName);   // Shows undefined
var myAge = undefined;
console.log(myAge);
// Objects
console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof true);
console.log(typeof "Hello");
console.log(typeof Math);
console.log(typeof null);
var x = "Karachi";
console.log(typeof (x));
console.log(typeof x);
// TASK
var nam = "Ilya";
// the expression is a number 1
console.log("hello ".concat(1)); // hello 1
// the expression is a string "nam"
console.log("hello ".concat("nam")); // hello nam
console.log("hello ".concat(nam));

// Unary,Binary,Operand
var x = 1;
x = -x; // unary
console.log(x);
var y = 3;
console.log(y - x); // Binary
// x and y are operands
// Math
console.log(5 % 2); // 1, Remainder
console.log(Math.pow(2, 2)); // 2² = 4, Exponentian
// String concatenation with Binary +
var s = "my" + "string";
console.log(s);
console.log('1' + 2); // "12"
console.log(2 + 2 + '1'); // "41" and not "221"
console.log('1' + 2 + 2); // "122" and not "14"
console.log(6 - "2"); // 4, converts '2' to a number
console.log('6' / '2'); // 3, converts both operands to numbers
// Number Conversion ,unary +
// Converts non-numbers
console.log(+true); // 1
console.log(+""); // 0
var apples = "2";
var oranges = "3";
// both values converted to numbers before the binary plus
console.log(+apples + +oranges); // 5
// Operator precedence
console.log((1 + 2) * 2);
// Assignments
var aa, b, c;
aa = b = c = 2 + 2;
console.log(aa); // 4
console.log(b); // 4
console.log(c); // 4
//Modify-in-place
var n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)
console.log(n); // 14
// Increment/Decrement
var counter = 2;
counter++; // Postfix
console.log(counter); // 3
counter = 2;
--counter; // Prefix
console.log(counter); // 1
var i = (1 + 2, 3 + 4);
console.log(i); // 7 
// Task :Postfix,prefix
var d = 1, e = 1;
var f = ++d; // 2
var g = e++; // 1
//task: Assignment
var z = 2;
var t = 1 + (z *= 2);
// Task :Type conversions
console.log("" + 1 + 0); // "10"
console.log("" - 1 + 0); // -1
console.log(true + false); //1
console.log(-6 / "3"); //= 2
console.log("2" * "3"); // = 6
console.log(4 + 5 + "px"); //= "9px"
console.log("$" + 4 + 5); // = "$45"
console.log("4" - 2); // = 2
console.log("4px" - 2); //= NaN
console.log("  -9  " + 5); //= "  -9  5" 
console.log("  -9  " - 5); // = -14 
console.log(null + 1); // = 1 
console.log(undefined + 1); //= NaN 
console.log(" \t \n" - 2); //= -2 

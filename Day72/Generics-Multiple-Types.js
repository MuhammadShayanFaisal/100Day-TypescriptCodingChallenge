// Generic Function `returnTypeEx`
function returnTypeEx(val) {
    return val;
}
console.log(returnTypeEx(100));
console.log(returnTypeEx("Elzero"));
// Arrow Function with Generics `returnTypeArrowSyntax`
var returnTypeArrowSyntax = function (val) { return val; };
console.log(returnTypeArrowSyntax(100));
console.log(returnTypeArrowSyntax("Elzero"));
// Generic Function `testType`
function testType(val) {
    return "The Value Is ".concat(val, " And Type Is ").concat(typeof val);
}
console.log(testType(100));
console.log(testType("Elzero"));
// Generic Function `multipleTypes`
function multipleTypes(valueOne, valueTwo) {
    return "The First Value Is ".concat(valueOne, " And Second Value ").concat(valueTwo);
}
console.log(multipleTypes("Osama", 100));
console.log(multipleTypes("Elzero", true));

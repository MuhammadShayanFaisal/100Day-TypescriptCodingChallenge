// Function with a rest parameter and type annotations
function addAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}
// Calling the function with various numeric arguments
console.log(addAll(10, 20, 30, 100, 10.5, +true)); // Output: 170.5

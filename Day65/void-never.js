// Below is the example of returning type void
function greet(name) {
    console.log("Hello,".concat(name, "!"));
}
function noReturnValue() {
    // This function doesn't return a value (implicitly returns undefined).
}
// Below is the example of returning type never
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        // This function never exits (infinite loop).
    }
}

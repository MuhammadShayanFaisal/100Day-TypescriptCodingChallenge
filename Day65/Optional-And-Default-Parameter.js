// Optional Parameters:
function greetOptional(name, age) {
    if (age !== undefined)
        console.log("Hello,".concat(name, "!You are ").concat(age, "years old."));
    else
        console.log("Hello, ".concat(name, "!"));
}
greetOptional("Alice");
greetOptional("Bob", 30);
// Default Parameters:
function greetDefault(name, age) {
    if (age === void 0) { age = 25; }
    console.log("Hello, ".concat(name, "! You are ").concat(age, " years old."));
}
greetDefault("Alice");
greetDefault("Bob", 30);

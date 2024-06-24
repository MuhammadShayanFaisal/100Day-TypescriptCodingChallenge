// Below is the example of declaring by giving choice of my types with null is called Nullable types
var username = "Glicher"; // The variable can hold a string or null
var ageEx = null; // The variable can hold a number or null
function greetUser(username) {
    if (username === null)
        console.log("Hello, Guest!");
    else
        console.log("Hello, ".concat(username, "!"));
}
greetUser("Glitcher");
greetUser(null);

//Create an object that adheres to the 'Person' interface
var person1 = {
    name: "Shayan",
    age: 30,
    greet: function (message) {
        console.log("".concat(this.name, " says: ").concat(message));
    },
};
person1.greet("Hello, TypeScript!");

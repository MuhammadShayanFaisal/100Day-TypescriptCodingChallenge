// Below is the example of declaring by giving the choice of my types is called Union types
let myVar: string | number;
myVar = "Hello"; // Valid assignment
console.log(myVar)
myVar = 42;       // Valid assignment
console.log(myVar)
// Uncommenting the line below would result in a TypeScript error
// myVar = true;  // Error: Type 'boolean' is not assignable to type 'string | number'.
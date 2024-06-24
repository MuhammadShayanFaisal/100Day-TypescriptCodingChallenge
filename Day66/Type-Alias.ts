//Below is the example of declaring by giving the choice of my type
type MyString=string;
let myName:MyString="Glitcher";
type MyStringOrNumber=string|number;
let myValue:MyStringOrNumber=10;
// another example
type Employee={
  name:string;
  age:number;
  email?:string;};
const alice:Employee={
  name:"Shayan",
  age:19,
  email:"shayan@example.com",};
const bob:Employee={
  name:"Bob",
  age:25,};
console.log(alice);
console.log(bob);
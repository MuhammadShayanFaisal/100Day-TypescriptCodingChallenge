let n = 123;
n = 12.345;
// We can assigned any value to variable because by default they are any type
console.log(NaN + 1); //BigInt
console.log(3 * NaN); 
console.log(NaN ** 0); 
console.log(NaN ** 1);
console.log(9007199254740991 + 1);
console.log(9007199254740991 + 2); 
let str1: string = "Hello";// string
let str2: string = 'World';
let str3: string = `I write ${str1} ${str2}.`;
let a: string = `Result ${2 + 3}`;
let nameFieldChecked = true; // Boolean
let ageFieldChecked = false; 
console.log(5 > 3);   
let aged = null;// Null 
console.log(aged); 
let myName: string;
//console.log(myName);   // Shows undefined
let myAge = undefined;
console.log(myAge);
console.log(typeof undefined);  // Objects
console.log(typeof 0);          
console.log(typeof true);      
console.log(typeof "Hello");     
console.log(typeof Math);        
console.log(typeof null);        
let x: string = "Karachi";
console.log(typeof(x));        
console.log(typeof x);          
// TASK
let nam: string = "Ilya";
console.log( `hello ${1}` );      // hello 1
console.log( `hello ${"nam"}` ); // hello nam
console.log( `hello ${nam}` ); 
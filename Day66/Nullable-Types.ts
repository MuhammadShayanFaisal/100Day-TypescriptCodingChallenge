// Below is the example of declaring by giving choice of my types with null is called Nullable types
let username:string|null="Glicher";// The variable can hold a string or null
let ageEx:number|null=null;// The variable can hold a number or null
function greetUser(username:string|null) {
    if (username===null) 
        console.log("Hello, Guest!");
    else 
        console.log(`Hello, ${username}!`);
    
}
greetUser("Glitcher"); 
greetUser(null);
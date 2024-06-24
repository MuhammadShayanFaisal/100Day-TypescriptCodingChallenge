// Optional Parameters:
function greetOptional(name:string,age?:number){
    if(age!==undefined)
    console.log(`Hello,${name}!You are ${age}years old.`);
    else
    console.log(`Hello, ${name}!`);
}
greetOptional("Alice"); 
greetOptional("Bob", 30);
// Default Parameters:
function greetDefault(name:string,age:number=25) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
greetDefault("Alice"); 
greetDefault("Bob", 30); 
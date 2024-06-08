let a=10;
a=9;
console.log(a);
const b=10;
try{
    throw 20;
    b=7;//This line will cause an error, you can't assign an const with 
}       // double initialization    
catch(b){
    console.log("Errro can't ressign the const declared variable");
}
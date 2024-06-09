let obj={
    name:"Shayan",
    age:19,
    city:"Karachi"
};
let jsonString=JSON.stringify(obj,null,2); // The '2' specifies the number
console.log(jsonString); //of spaces to use as white space
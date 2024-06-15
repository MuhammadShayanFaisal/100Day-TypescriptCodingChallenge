let value:any=true;// String conversion
value =String(value);// now value is a string "true"
console.log(typeof value);// string
let str="123"// Number Conversion
let num = Number(str); // becomes a number 123
console.log(typeof num);
let age:any= Number("an arbitrary string instead of a number");
console.log(age);
age=undefined;
console.log(age);// NaN
age=null;
console.log(age);// 0
age=true;
console.log(age);// 1
//Boolean Conversion:It gives false on empty string,0,null,undefined and NaN
let a:any=0;
console.log(a);//false
a=NaN;
console.log(a);//false
a=" ";
console.log(a);


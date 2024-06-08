{
    let a=10;
    const b=11;
    console.log(a);
    console.log(b);
}
try{
    throw 20;
    console.log(a);// this will fail becuase out of block scope
}
catch(error){
    console.log("a is not accecsible outside the {}");
}
try{
    throw 20;
    console.log(b);// this will fail because out of block of block scope
}
catch{
    console.log("b is not accecsible outside the {}");
}
function Displayingobject(obj:object){
    for (let property in obj) {
        // Loops through each property in the object
        console.log(`${property}: ${obj[property]}`);
        // Shows the property name and its value
    }
}
let Car={
    make:"Toyoyta",
    model:"24-A",
    year:2017
}
Displayingobject({make:"Toyottta",model:"Coroolla",year:2002});

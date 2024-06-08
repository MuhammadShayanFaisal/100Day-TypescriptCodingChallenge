type Shape={
    kind:string,
    radius?:number,
    width?:number,
    height?:number}
let circle:Shape={
    kind:"circle",
    radius:20}
let rectangle:Shape={
    kind:"rectangle",
    radius:20,
    width:15,
    height:15}
console.log(circle);
console.log(rectangle);
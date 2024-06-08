function lengthofarray(str:string[]){
    let lengths: number[] = str.map(str =>str.length);
    return lengths;

}
let array=["banana","apple","mango"];
console.log(lengthofarray(array));
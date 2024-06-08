function returngreaterthan10(num:number[]){
    return num.filter(number => number > 10);
}
let array=[10,20,40,6,9,1];
console.log("The number greater than 10 is: ",returngreaterthan10(array));
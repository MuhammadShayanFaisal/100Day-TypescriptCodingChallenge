function Swapping(a:number,b:number){
    let temp=a;
    a=b
    b=temp;
    return{a,b};
}
console.log("The swapping is:",Swapping(5,10));
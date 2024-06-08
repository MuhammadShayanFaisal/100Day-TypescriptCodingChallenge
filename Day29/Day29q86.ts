function textpresence(str:string):boolean{
    return str.includes("Javascript");
}
let sentence="I love Javascript,it's awesome";
console.log("The word Javascipt present in sentence is:"
,textpresence(sentence));
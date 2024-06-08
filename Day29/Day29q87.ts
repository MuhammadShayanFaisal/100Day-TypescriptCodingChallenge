function extracttext(str:string){
    return str.substring(0,10);
}
let sentence="My name is Shayan Faisal, I am a student";
console.log("First ten characters from sentence is:",extracttext(sentence));
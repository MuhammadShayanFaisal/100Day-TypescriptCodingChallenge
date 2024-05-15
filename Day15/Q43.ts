function magicians(arr:string[]){
    for(let i=0;i<arr.length;i++){
        console.log("The",i+1,"Magician name is:",arr[i]);}}
function greatmagicians(arr:string[]){
    let magics:string[]=[];
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]+"The Great ");
        magics.push(arr[i]+"The Great");}
    return magics;}
 let array=["Alice","David","Jordan"];
magicians(array);//Show The Original Array
let modifiedarray=greatmagicians(array);// Modifying the Array
console.log("Original magicians");
magicians(array);  //show original names
console.log("Great Magicians");
magicians(modifiedarray);  // show modified names

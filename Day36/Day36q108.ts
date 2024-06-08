function stringcomparison(str:string,str1:string){
    return str.toLowerCase!=str1.toLowerCase; 
}
console.log("Strings after comparison is:",stringcomparison("Hello","hello"));
console.log("Strings after comparison is:",stringcomparison("THIS","this"));
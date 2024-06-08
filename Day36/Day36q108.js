function stringcomparison(str, str1) {
    return str.toLowerCase != str1.toLowerCase;
}
console.log("Strings after comparison is:", stringcomparison("Hello", "hello"));
console.log("Strings after comparison is:", stringcomparison("THIS", "this"));
export {};

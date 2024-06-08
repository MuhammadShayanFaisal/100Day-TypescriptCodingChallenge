function lengthofarray(str) {
    let lengths = str.map(str => str.length);
    return lengths;
}
let array = ["banana", "apple", "mango"];
console.log(lengthofarray(array));
export {};

function Reducesum(num) {
    let number = num.reduce((accumulator, current) => accumulator + current, 0);
    return number;
}
let array = [1, 2, 3, 4, 5];
console.log("After adding number into single sum value is:", Reducesum(array));
export {};

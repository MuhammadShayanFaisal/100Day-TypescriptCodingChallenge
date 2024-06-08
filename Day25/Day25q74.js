function Swapping(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return { a, b };
}
console.log("The swapping is:", Swapping(5, 10));
export {};

function Rmainderandquotient(num1, num2) {
    let quotient = Math.round(num1 / num2);
    let remainder = num1 % num2;
    return { quotient, remainder };
}
console.log("The quotient and remainder is: ", Rmainderandquotient(26, 5));
export {};

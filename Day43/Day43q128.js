const multiplyParameters = (...num) => num.reduce((total, number) => total * number, 1);
console.log(multiplyParameters(1, 6));
export {};

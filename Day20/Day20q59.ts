function makeAdder(valueToAdd: number): (number) => number {
    return function(number: number): number {
        return number + valueToAdd;
    };
}
let addFive = makeAdder(20);
console.log(addFive(20));
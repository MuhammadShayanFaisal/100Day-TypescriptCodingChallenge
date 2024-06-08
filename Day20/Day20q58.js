function AverageScoreCalculator(...scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum = sum + scores[i];
    }
    return sum / scores.length;
}
let returned = AverageScoreCalculator(23, 34, 67, 78.9, 0.09);
console.log("The average score 23,34,67,78.9,0.09 of this is: ", returned);
export {};

function calculateaverage(grade) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum = sum + grades[i];
    }
    return (sum / grades.length);
}
;
let grades = [77, 78, 90, 56, 65];
console.log(grades); // Original Grades
console.log("The average is: ", calculateaverage(grades));
export {};

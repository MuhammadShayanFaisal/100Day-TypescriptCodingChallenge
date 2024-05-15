var i;
var numbers = [1, 2, 4, 6, 8, 11, 66];
for (i = 0; i < numbers.length; i++) {
    switch (numbers[i]) {
        case 1:
            console.log(numbers[i], "has an ordinal suffix st");
            break;
        case 2:
            console.log(numbers[i], "has an ordinal suffix nd");
            break;
        case 3:
            console.log(numbers[i], "has an ordinal suffix rd");
            break;
        default:
            console.log(numbers[i], "has an ordinal suffix th");
            break;
    }
}

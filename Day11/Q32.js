var i, j, array = ["Shayan", "Sufyan", "Ali", "Hamza"];
var array1 = ["Usman", "Hamza", "Abdullah", "Ali"];
for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
        if (array[i] == array1[j]) {
            console.log("Note :The name ", array[i], "is unique");
        }
    }
}

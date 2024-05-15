function magicians(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log("The", i + 1, "Magician name is:", arr[i]);
    }
}
function greatmagicians(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i] = arr[i] + " The great");
    }
}
var array = ["Alice", "David", "Jordan"];
magicians(array); //Show The Original Array
greatmagicians(array); // Modifying the Array
magicians(array); // Modifies the Array

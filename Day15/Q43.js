function magicians(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log("The", i + 1, "Magician name is:", arr[i]);
    }
}
function greatmagicians(arr) {
    var magics = [];
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i] + "The Great ");
        magics.push(arr[i] + "The Great");
    }
    return magics;
}
var array = ["Alice", "David", "Jordan"];
magicians(array); //Show The Original Array
var modifiedarray = greatmagicians(array); // Modifying the Array
console.log("Original magicians");
magicians(array); //show original names
console.log("Great Magicians");
magicians(modifiedarray); // show modified names

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var i, places = ["America", "Saudia Arabia", "Australia"];
for (i = 0; i < places.length; i++) {
    console.log("One of my best place to visit is :", places[i]);
}
console.log("Original Order: ", places);
console.log("Alphabatical Order: ", __spreadArray([], places, true).sort());
console.log("Original Order: ", places);
console.log("Reverse Alphabatical order is: ", __spreadArray([], places, true).sort().reverse());
console.log("Original Order: ", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original Order is:", places);
places.sort();
console.log("Alphabatical Order is: ", places);
places.reverse();
console.log("Reverse Alphabtical order is: ", places);

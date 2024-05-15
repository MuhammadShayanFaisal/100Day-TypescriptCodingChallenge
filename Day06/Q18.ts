var i,places=["America","Saudia Arabia","Australia"];
for(i=0;i<places.length;i++){
    console.log("One of my best place to visit is :",places[i]);
}
console.log("Original Order: ",places);
console.log("Alphabatical Order: ",[...places].sort());
console.log("Original Order: ",places);
console.log("Reverse Alphabatical order is: ",[...places].sort().reverse());
console.log("Original Order: ",places);
places.reverse();
console.log("Reversed order:",places);
places.reverse();
console.log("Original Order is:",places);
places.sort();
console.log("Alphabatical Order is: ",places);
places.reverse();
console.log("Reverse Alphabtical order is: ",places);

var i, guests = ["Umer", "Ali", "Usman", "Mufeez"];
console.log("Unfortunately, I can inite only two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry", removedGuest, "I cannot invite you to dinner");
}
for (i = 0; i < guests.length; i++) {
    console.log("Dear", guests[i], ",Would you like to join me for dinner");
}

let Car = {
    make: "Toyotta",
    model: "Corrola",
    year: 2017
};
console.log("The maker of car is: ", Car.make);
console.log("The model of car is: ", Car.model);
console.log("The year of car manufactured is: ", Car.year);
Car.make = "Honda";
Car.model = "Civic";
Car.year = 2020;
console.log("The maker of car is: ", Car.make);
console.log("The model of car is: ", Car.model);
console.log("The year of car manufactured is: ", Car.year);
export {};

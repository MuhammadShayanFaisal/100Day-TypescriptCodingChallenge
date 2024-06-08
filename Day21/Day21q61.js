var Vehicle;
(function (Vehicle) {
    Vehicle[Vehicle["Car"] = 0] = "Car";
    Vehicle[Vehicle["Truck"] = 1] = "Truck";
    Vehicle[Vehicle["Motorcycyle"] = 2] = "Motorcycyle";
})(Vehicle || (Vehicle = {}));
console.log(Vehicle.Motorcycyle); //It shows 2, as enum start counting from 0
export {};

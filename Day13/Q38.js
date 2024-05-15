function cities(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("I would like to visit ", city, "located in", country);
}
cities();
cities("Lahore");
cities("Tokyo", "Japan");

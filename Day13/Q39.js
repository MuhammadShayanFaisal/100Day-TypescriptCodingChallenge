function city_countrypairs(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    return { city: city, country: country };
}
console.log(city_countrypairs());
console.log(city_countrypairs("Tokyo", "Japan"));
console.log(city_countrypairs("Lahore"));

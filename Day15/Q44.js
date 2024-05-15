function sandwhich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making sandwhich with these ingredients", items);
}
sandwhich("Chesse", "Butter", "Mayonise");

const countries = new Map();
countries.set("USA", "Washington,D.C.");
countries.set("France", "Paris");
countries.set("Japan", "Tokyo");
console.log(countries);
function logCapitalOfCanada(countries) {
    if (countries.has("Canada"))
        console.log(`The capital of Canada is ${countries.get("Canada")}`);
    else
        console.log("Canada is not in the Map.");
}
logCapitalOfCanada(countries);
export {};

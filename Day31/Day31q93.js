function replacefruits(fruits) {
    const index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Mango";
}
const fruits = ["Apple", "Banana", "Cherry"];
replacefruits(fruits);
console.log(fruits);
export {};

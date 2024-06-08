let items = ["banana", "apple", true, 0, 3.5];
let stringsArray = items.filter(item => typeof item === "string");
console.log(items); // Original Items
console.log(stringsArray); // Original Items with string
export {};

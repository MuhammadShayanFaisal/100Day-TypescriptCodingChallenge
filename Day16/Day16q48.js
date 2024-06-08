let priceoflaptop = [12000, 13000, 20000, 30000];
let priceoflaptop1 = [13000, 14000, 45000, 34000];
let combined = [...priceoflaptop, ...priceoflaptop1].sort((a, b) => a - b);
console.log("The combined prices is: ", combined);
export {};

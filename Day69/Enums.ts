//Follow is the example of An enum is a special "class" that represents a group of constants.
//Enums come in two flavors string and numeric
enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
  }
const today:Days=Days.Wednesday;
console.log(`Today is ${Days[today]}`);
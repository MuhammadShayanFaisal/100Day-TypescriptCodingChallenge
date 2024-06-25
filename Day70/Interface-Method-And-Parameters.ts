// Example of interface with method defined
interface PersonEx2 {
    name:string;
    age:number;
    greet(message: string): void;
}
//Create an object that adheres to the 'Person' interface
const person1:PersonEx2 = {
    name:"Shayan",
    age:30,
    greet(message: string) {
      console.log(`${this.name} says: ${message}`);
    },
};
person1.greet("Hello, TypeScript!");
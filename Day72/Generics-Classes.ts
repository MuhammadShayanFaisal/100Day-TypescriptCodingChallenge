// Generic Class Examples
class User<T=string> {
    constructor(public value:T){}
    // Method that takes a message of type `T` and displays it along with the `value` property
    show(msg:T):void {
      console.log(`${msg} - ${this.value}`);} }
  let userOne=new User<string>("Elzero");
  console.log(userOne.value); 
  userOne.show("Message"); 
  // Creating an instance of `User` with a type parameter that can be a number or a string
  let userTwo=new User<number|string>(100);
  console.log(userTwo.value); 
  userTwo.show("Message");
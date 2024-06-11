console.log("Start");
setTimeout(()=>{
  console.log("Callback executed");// when the current stack become empty,
  //it will run due to event loop
}, 0);
console.log("End");
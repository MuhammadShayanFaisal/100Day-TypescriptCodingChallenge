const promise1=Promise.resolve(3);
const promise2=20;
const promise3=new Promise<string>((resolve)=>{
  setTimeout(resolve,100,"foo");
});
Promise.all([promise1, promise2, promise3]).then((values)=>{
  console.log(values);
});

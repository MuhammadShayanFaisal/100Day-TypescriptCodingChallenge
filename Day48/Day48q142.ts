const helloPromise=new Promise<string>((resolve)=>{
    setTimeout(()=>{
      resolve("Hello World");
    },2000);
  });
helloPromise.then((message)=>console.log(message));
//After 2 second hello world is printed
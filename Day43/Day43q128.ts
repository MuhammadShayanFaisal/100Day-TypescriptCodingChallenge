const multiplyParameters =(...num: number[]) =>
    num.reduce((total,number)=>total *number,1);
  console.log(multiplyParameters(1,6));
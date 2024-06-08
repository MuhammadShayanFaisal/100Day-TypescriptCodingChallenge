const students =new Map<number,string>();
students.set(1,"Ali");
students.set(2,"Shayan");
students.set(3,"Umer");

students.forEach((name,id)=>{
  console.log("Student id is: ",id," and name is: ",name);
});
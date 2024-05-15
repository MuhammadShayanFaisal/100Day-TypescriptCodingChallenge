var i,guests=["Shayan Faisal","Sufyan Ali","Hamza Ahmed"];
console.log("Bigger dinning table has been installed");
guests.unshift("Ahmed");
guests.splice(guests.length/2,0,"Umer");
guests.push("Adil");
for(i=0;i<guests.length;i++){
    console.log("Dear",guests[i],",Would you like to join me for dinner");
}
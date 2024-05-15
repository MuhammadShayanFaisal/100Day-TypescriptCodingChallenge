var i,guests=["Shayan Faisal","Sufyan Ali","Hamza Ahmed"];
for(i=0;i<guests.length;i++){
    console.log("Dear",guests[i],",Would you like to join me for dinner");}
let newguest="Ali";
let unabletoattend="Sufyan Ali";
console.log("The",unabletoattend,"has not been with us in the dinner");
for(i=0;i<guests.length;i++){
    if(guests[i]==unabletoattend){
        guests[i]=newguest;}
    console.log("Dear",guests[i],",Would you like to join me for dinner")}
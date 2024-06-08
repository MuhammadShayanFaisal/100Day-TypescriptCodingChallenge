function Categorizingpersonsage(num:number){
    if(num<13&&num>0)
        console.log("You are a Child");
    else if(num<=19&&num>=13)
        console.log("You are a Teenager");
    else if(num>=20&&num<50)
        console.log("You are a Adult");
    else if(num>=50)
        console.log("You are Older");
    else
    console.log("Invalid Range");}
Categorizingpersonsage(20);
Categorizingpersonsage(5);
Categorizingpersonsage(65);
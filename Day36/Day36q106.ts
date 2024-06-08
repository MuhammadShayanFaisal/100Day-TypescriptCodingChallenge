function LeapYear(num:number){
    if((num%4==0&&num%100!=10)||(num%400==0))
     console.log("It is a leap year");   
    else 
    console.log("It is not a leap year");
}
LeapYear(2024);
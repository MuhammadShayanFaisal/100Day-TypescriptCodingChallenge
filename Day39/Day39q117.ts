function Grade(str:string){
    switch(str){
        case 'A':
            console.log("Excellent");break;
        case 'B':
            console.log("Good");break;
        case 'C':
            console.log("Fair");break;
        case "D":
            console.log("Poor");break;
        case "F":
            console.log("Fail");break;
        default:
            console.log("Invalid grade");break;}}
Grade("U");
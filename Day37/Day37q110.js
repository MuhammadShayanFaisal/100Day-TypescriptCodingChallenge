function Gradingcriteria(num) {
    if (num >= 80)
        console.log("Congratulations,You have got A-one grade");
    else if (num >= 70 && num < 80)
        console.log("You have got A grade");
    else if (num >= 60 && num < 70)
        console.log("You have got B grade");
    else if (num >= 50 && num < 60)
        console.log("You have got C grade");
    else if (num >= 40 && num < 50)
        console.log("You have got D grade");
    else if (num >= 30 && num < 40)
        console.log("Oops,You have got failed");
    else
        console.log("Invalid range");
}
Gradingcriteria(90);
export {};

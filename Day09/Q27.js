//Supposing 5 points earned on if statement execution
//10 points are earned on else if statement execution
//15points are earned on else if statement execution
var alien_color = "Red";
if (alien_color == "Red")
    console.log("You have earned 5 points");
else if (alien_color == "Green")
    console.log("You have earned 10 points");
else
    console.log("You have earned 15 points");
// Above Logic executes if statement for red colour
alien_color = "Green";
if (alien_color == "Red")
    console.log("You have earned 5 points");
else if (alien_color == "Green")
    console.log("You have earned 10 points");
else
    console.log("You have earned 15 points");
// Above Logic executes else if statement for green colour
alien_color = "Yellow";
if (alien_color == "Red")
    console.log("You have earned 5 points");
else if (alien_color == "Green")
    console.log("You have earned 10 points");
else
    console.log("You have earned 15 points");
// Above Logic executes else statement for yelow colour

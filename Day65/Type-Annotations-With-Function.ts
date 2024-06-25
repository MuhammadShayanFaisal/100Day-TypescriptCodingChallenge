// Function to work with type mentioned in parameters
function calculateRectangleArea(length:number,width: number):number {
    return length*width;
} 
  // Calling the function with valid arguments
const lengthRectAngle=5;
const widthOfRectAngle=3;
const area=calculateRectangleArea(lengthRectAngle,widthOfRectAngle);
console.log(`The area of the rectangle is:${area}`);
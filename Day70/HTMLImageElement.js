// This example is for educational purposes, but it is not going to work. 
var imgElement = document.createElement("img");
imgElement.src = "image.jpg";
imgElement.alt = "My Image";
if (imgElement.complete) {
    console.log("Image dimensions: ".concat(imgElement.naturalWidth, "x").concat(imgElement.naturalHeight));
}
else {
    imgElement.addEventListener("load", function () {
        console.log("Image dimensions: ".concat(imgElement.naturalWidth, "x").concat(imgElement.naturalHeight));
    });
}

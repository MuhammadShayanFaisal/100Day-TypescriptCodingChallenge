let Profile=(function() {
    let name="Shayan";
    let age=19;
    return {
        displayInfo: function() {
            console.log("The name is",name,", The age is",age);
        }
    };
})();
Profile.displayInfo();
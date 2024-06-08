let laptop = {
    make: "Dell",
    model: "2A-13",
    year: 2017,
    describe: function () {
        console.log("The laptop made by", this.make, "with model no", this.model, "and", this.year);
    }
};
laptop.describe();
export {};

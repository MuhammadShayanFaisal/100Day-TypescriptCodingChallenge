try {
    console.log("it is proceed");
    throw new Error("Something went wrong");
} catch (error) {
    console.log(error.message);
}
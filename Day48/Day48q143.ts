const conditionalPromise = new Promise<string>((resolve, reject) => {
    const success = Math.random() > 0.5;//Randomly choose success or failure
    if (success) {
      resolve("Success!");
    } else {
      reject(new Error("Failure"));
    }
  });
conditionalPromise
    .then((result)=>console.log(result)) // Handles successful resolution
    .catch((error)=>console.log(error.message));// Handles a rejection
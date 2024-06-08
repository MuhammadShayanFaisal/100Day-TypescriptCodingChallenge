const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
      console.log("Traditional function:", this.value); // 'this' refers to
      // traditionalVsArrow object
    },
    arrowFunction: () => {
      console.log("Arrow function:", this.value); // 'this' is not bound to
      // traditionalVsArrow object but to the scope in which 
      //traditionalVsArrow was defined
    },
  };
  let value=4;
  traditionalVsArrow.traditionalFunction(); // Logs "traditionalVsArrow value"
  traditionalVsArrow.arrowFunction();
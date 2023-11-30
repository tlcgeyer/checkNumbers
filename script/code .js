function addNumbers() {
    return new Promise((resolve, reject) => {
      let numb1 = prompt("Enter the first number:");
      let numb2 = prompt("Enter the second number:");
  

      if (!isNaN(numb1) && !isNaN(numb2)) {
        let sum = Number(number1) + Number(numb2);
        resolve(`${numb1} + ${numb2} = ${sum}`);
      } else {
        reject(
          `Error: ${
            isNaN(numb1) ? `${numb1} is not a number` : ""
          }${isNaN(numb2) ? `${isNaN(numb1) ? " and " : ""}${numb2} is not a number` : ""}`
        );
      }
    });
  }
  
  addNumbers()
    .then((result) => {
      alert(result);
    })
    .catch((error) => {
      alert(error);
    });
  
// Business Logic
function userInput(numberInput) {
  const toNumber = parseInt(numberInput);

  if (isNaN(toNumber)) {
    return false;
  } else {
    const resultArray = [];
    for (let i = 0; i <= toNumber; i++) {
      let element = i.toString();
      if ((element.endsWith("1") || element === "10")) {
        element = "Beep";
      } else if (element.endsWith("2")) {
        element = "Boop";
      } else if (element.endsWith("3")) {
        element = "Won't you be my neighbor?";
      }
      resultArray.push(element);
    }
    return resultArray;
  }
}

// UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  const number = document.getElementById("user-number").value;
  const userAddition = userInput(number);
  const resultElement = document.getElementById("return-statement");
  resultElement.removeAttribute("hidden"); 
  const alteredNumberElement = document.getElementById("altered-number");
  alteredNumberElement.innerText = userAddition.join(", ");
}

window.addEventListener("DOMContentLoaded", function() {
  document.querySelector("form#neighborhood-input").addEventListener("submit", handleFormSubmission);
});

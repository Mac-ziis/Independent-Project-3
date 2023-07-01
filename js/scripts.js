// Business Logic

function userInput(numberInput) {
  const toNumber = parseInt(numberInput);

  if (isNaN(toNumber)) {
    return false;
  } else {
    const resultArray = [];
    for (let i = 0; i <= toNumber; i++) {
      let element = i.toString();
      if (element.endsWith("1")) {
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

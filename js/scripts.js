function userInput(numberInput) {
const toNumber = parseInt(numberInput);

  if (isNaN(toNumber)) {
    return false;
  } else {
    return toNumber;
  }
}
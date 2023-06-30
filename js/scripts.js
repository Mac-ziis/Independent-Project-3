function userInput(numberInput) {
const toNumber = parseInt(numberInput);

  if (isNaN(toNumber)) {
    return false;
  } else {
    const toArray = numberInput; //document.getElementById("altered-number").value;
  const array = toArray.split(" ");
  return array;
  }

}
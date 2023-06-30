function userInput(numberInput) {
  const toNumber = parseInt(numberInput);

  if (isNaN(toNumber)) {
    return false;
  } else {
    const toArray = numberInput.split(",");
    const replacedArray = toArray.map((element) => {
      if (element.includes("1")) {
        return "Beep";
      } else {
        return element;
      }
    });
    return replacedArray;
  }
}


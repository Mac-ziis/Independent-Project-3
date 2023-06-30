function userInput(numberInput) {
  const toNumber = parseInt(numberInput);

  if (isNaN(toNumber)) {
    return false;
  } else {
    const toArray = numberInput.split(",");
    for (let i = 0; i < toArray.length; i++) {
      if (toArray[i] === "1") {
        toArray[i] = "Beep";
      }
    }
    return toArray;
  }
}


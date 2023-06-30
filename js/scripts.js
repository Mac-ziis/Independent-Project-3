function userInput(numberInput) {
  const toNumber = parseInt(numberInput);

  if (isNaN(toNumber)) {
    return false;
  } else {
    const oneArray = numberInput.split(",");
    const replacedArray = oneArray.map((element) => {
      if (element.includes("1")) {
        return "Beep";
      } else {
        return element;
      }
    });

    const twoArray = replacedArray.map((element) => {
      if (element.includes("2")) {
        return "Boop";
      } else {
        return element;
      }
    });

    return twoArray;
  }
}


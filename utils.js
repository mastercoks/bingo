const getRandomNumber = (valueMin, valueMax) => 
  Math.floor(Math.random() * (valueMax - valueMin + 1) + valueMin);


const getNumberNotRepeated = (valueMin, valueMax, list) => {
  let number, found;
  do {        
    number = (list.length+1 <= valueMax) ? getRandomNumber(valueMin, valueMax) : null;
    found = list.find((element) => {
      return element == number
    })    
  } while (found && number);
  return number;
}

export { getNumberNotRepeated };


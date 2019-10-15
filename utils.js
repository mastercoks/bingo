const colors = [
  'red',
  'pink',
  'purple',
  'deep-purple',
  'indigo',
  'blue',
  'light-blue',
  'cyan',
  'teal',
  'green',
  'light-green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deep-orange',
  'brown',
  'gray',
  'blue-gray'
]; 

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

const getRandomColor = () =>  colors[getRandomNumber(0,colors.length-1)]

export { getNumberNotRepeated, getRandomColor };


import { getNumberNotRepeated } from "./utils.js";

class Player {
  constructor(id, name, valueMin, valueMax, qtyNumbers) {
    this.id = id;
    this.name = name;
    this.numbers = [];
    this.score = 0;
    for (let i = 0; i < qtyNumbers; i++) {
      let random = getNumberNotRepeated(valueMin, valueMax, this.numbers);      
      this.numbers.push(random);      
    }
    this.numbers = this.numbers.sort((a, b) => a - b);
  }
}

export default Player;
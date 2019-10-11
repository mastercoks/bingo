import elements from "./playerElements.js";
import player from "./player.js";
import { getNumberNotRepeated } from "./utils.js";
import { cardTemplate, numberDrawnTemplate } from "./components/templates.js";

const state = {
  CRIANDO: 0,
  SORTEANDO: 1,
  PREMIADO: 2
}

export default {
  players: [],
  numbersDrawn: [],
  valueMin: 1,
  valueMax: 25,
  qtyNumbers: 8,
  state: state.CRIANDO,
  start() {
    elements.get.call(this);
    elements.actions.call(this);
    this.drawNumber.disabled = true;
  },
  addCard() {
    if (this.drawNumber.disabled) this.drawNumber.disabled = false;
    if (this.name.value) {
      const playerData = new player(this.players.length+1, this.name.value, this.valueMin, this.valueMax, this.qtyNumbers);
      console.log(playerData);
      
      this.players.push(playerData);
      this.cardsEl.innerHTML += cardTemplate(playerData.name, playerData.numbers, this.numbersDrawn);
    } else {
      alert('Preencha o campo!')
    }
  },
  draw() {
    if (this.players.length === 0) return alert('Não existe nenhum jogador');
    
    if (this.state === state.CRIANDO) {
      this.state = state.SORTEANDO;
      this.name.disabled = true;
      this.generateCard.disabled = true;
    }
    
    let number = getNumberNotRepeated(this.valueMin, this.valueMax, this.numbersDrawn);
    if (number) {
      this.numbersDrawn.push(number);
      this.numbersDrawnEl.innerHTML += numberDrawnTemplate(number);
      console.log(this.numbersDrawn);
    } else {
      console.log('Todos números já foram sorteados');      
    }        
    this.update(number);
  },
  update(numberDrawn) {
    this.cardsEl.innerHTML = '';
    console.log(this.players);
    
    for (let playerData of this.players) {
      this.checkHit(playerData, numberDrawn);
      this.cardsEl.innerHTML += cardTemplate(playerData.name, playerData.numbers, this.numbersDrawn);
    }
  },
  checkHit(playerData, numberDrawn) {
    for (const number of playerData.numbers) {
      if (numberDrawn === number) playerData.score++;
    }
    console.log(numberDrawn, playerData);
  }
}
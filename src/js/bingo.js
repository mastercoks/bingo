import elements from "./elements.js";
import player from "./player.js";
import { getNumberNotRepeated } from "./utils.js";
import { cardTemplate, numbersDrawnTemplate, rankingItemTemplate, rankingTemplate, infoSVG, trophySVG } from "./components/templates.js";

const states = {
  REGISTER: 0,
  DRAWN: 1,
  WINNER: 2
}

const types = {
  INFO: 0,
  TROPHY: 1
}

export default {
  expand: true,
  showModal: false,
  players: [],
  numbersDrawn: [],
  valueMin: 1,
  valueMax: 25,
  qtyNumbers: 8,
  state: states.REGISTER,

  start() {
    elements.get.call(this);
    elements.actions.call(this);
    this.update();
  },

  restart() {
    this.players = [];
    this.numbersDrawn = [];
    this.state = states.REGISTER;
    this.update();
  },

  update() {    

    const size = this.numbersDrawn.length;

    this.cardsEl.innerHTML = '';
    
    
    for (let playerData of this.players) {
      this.checkHit(playerData, this.numbersDrawn[size-1]);
      this.cardsEl.innerHTML += cardTemplate(playerData, this.numbersDrawn);
    }

    this.lastEl.innerText = this.numbersDrawn[size-1] ? this.numbersDrawn[size-1] : '';
    this.lastButOneEl.innerText = this.numbersDrawn[size-2] ? this.numbersDrawn[size-2] : '';
    this.lastButTwoEl.innerText = this.numbersDrawn[size-3] ? this.numbersDrawn[size-3] : '';
    this.lastButThreeEl.innerText = this.numbersDrawn[size-4] ? this.numbersDrawn[size-4] : '';
    this.lastButFourEl.innerText = this.numbersDrawn[size-5] ? this.numbersDrawn[size-5] : '';
    this.lastButFiveEl.innerText = this.numbersDrawn[size-6] ? this.numbersDrawn[size-6] : '';

    this.numbersDrawnEl.innerHTML = numbersDrawnTemplate(this.numbersDrawn, this.valueMax);
    
    this.rankingBodyEl.innerHTML = rankingTemplate(this.players);

    if (this.state === states.REGISTER) {
      this.inputName.disabled = false;
      this.buttonGenerate.disabled = false;
      this.buttonDrawn.disabled = true;
      this.buttonRestart.disabled = true;
    } else if (this.state === states.DRAWN) {
      this.inputName.disabled = true;
      this.buttonGenerate.disabled = true;
      this.buttonDrawn.disabled = false;
      this.buttonRestart.disabled = true;
    } else {
      this.toggleModal(types.TROPHY);
      this.inputName.disabled = true;
      this.buttonGenerate.disabled = true;
      this.buttonDrawn.disabled = true;
      this.buttonRestart.disabled = false;
    }    
  },

  addCard() {
    if (this.inputName.value) {
      if (this.buttonDrawn.disabled) this.buttonDrawn.disabled = false;

      const playerData = new player(this.players.length+1, this.inputName.value, this.valueMin, this.valueMax, this.qtyNumbers);
      
      this.players.push(playerData);
      this.cardsEl.innerHTML += cardTemplate(playerData, this.numbersDrawn);
      this.rankingBodyEl.innerHTML += rankingItemTemplate(playerData);
      this.inputName.value = '';
    } else {
      this.toggleModal(types.INFO, 'Preencha o campo nome!');
    }
  },

  draw() {
    if (this.players.length === 0) return this.toggleModal(types.INFO, 'É necessário ter algum jogador para iniciar o sorteio!');
    
    if (this.state === states.REGISTER) this.state = states.DRAWN;
    
    let number = getNumberNotRepeated(this.valueMin, this.valueMax, this.numbersDrawn);
    if (number) this.numbersDrawn.push(number);    

    this.update();
  },

  checkHit(playerData, numberDrawn) {
    for (const number of playerData.numbers) {
      if (numberDrawn === number) playerData.score++;
    }
    if (playerData.score === this.qtyNumbers) this.state = states.WINNER;
  },

  getWinners() {
    let winners = [];
    for (const playerData of this.players) {
      if (playerData.score === this.qtyNumbers) {
        winners.push(playerData.name);
      }
    }
    return winners;
  },

  toggleExpandRanking() {
    this.expand = !this.expand;
    if (this.expand) {
      this.expandRanking.innerText = "expand_less";
      this.ranking.classList.remove("hide");
    } else {
      this.expandRanking.innerText = "expand_more";
      this.ranking.classList.add("hide");
    }
  },

  toggleModal(type, msg) {

    this.modalIcon.innerHTML = '';
    if (type === types.INFO) {
      this.modalIcon.innerHTML = infoSVG();
      this.modalTitle.innerText = 'Atenção';
      this.modalText.innerText = msg;
    } else {
      const winners = this.getWinners();
      this.modalIcon.innerHTML = trophySVG();
      this.modalTitle.innerText = winners.length > 1 ? 'Parabéns aos vencedores' : 'Parabéns ao vencedor';
      this.modalText.innerText = winners.toString().split(',').join('\n');
    }
    this.showModal = !this.showModal;
    if (this.showModal) {
      this.modalInfo.classList.remove("hide");
    } else {
      this.modalInfo.classList.add("hide");
    }
  }
}
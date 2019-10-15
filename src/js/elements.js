export default {
  get() {
    this.inputName = document.querySelector("#input-name");
    this.buttonGenerate = document.querySelector("#button-generate");
    this.buttonDrawn = document.querySelector("#button-drawn");
    this.buttonRestart = document.querySelector("#button-restart");
    this.buttonCloseModal = document.querySelector("#button-close");
    this.tableBody = document.querySelector("#tbody");
    this.cardsEl = document.querySelector("#cards");
    this.numbersDrawnEl = document.querySelector("#numbers-drawn");
    this.hideRanking = document.querySelector("#hide-ranking");
    this.expandRanking = document.querySelector("#expand");
    this.ranking = document.querySelector("#ranking");
    this.lastEl = document.querySelector("#last");
    this.lastButOneEl = document.querySelector("#last-but-one");
    this.lastButTwoEl = document.querySelector("#last-but-two");
    this.lastButThreeEl = document.querySelector("#last-but-three");
    this.lastButFourEl = document.querySelector("#last-but-four");
    this.lastButFiveEl = document.querySelector("#last-but-five");
    this.rankingBodyEl = document.querySelector("#ranking-body");
    this.modalInfo = document.querySelector("#modal-info");
    this.modalIcon = document.querySelector("#modal-icon");
    this.modalTitle = document.querySelector("#modal-title");
    this.modalText = document.querySelector("#modal-text");
  },
  actions() {
    this.inputName.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) this.buttonGenerate.click();
    });
    this.buttonGenerate.onclick = () => this.addCard();
    this.buttonDrawn.onclick = () => this.draw();
    this.buttonRestart.onclick = () => this.restart();
    this.hideRanking.onclick = () => this.toggleExpandRanking();
    this.buttonCloseModal.onclick = () => this.toggleModal();
  }
}
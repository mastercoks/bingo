export default {
  get() {
    this.name = document.querySelector("#input-name");
    this.generateCard = document.querySelector("#button-generate");
    this.drawNumber = document.querySelector("#button-draw");
    this.tableBody = document.querySelector("#tbody");
    this.cardsEl = document.querySelector("#cards");
    this.numbersDrawnEl = document.querySelector("#numbers-drawn");
  },
  actions() {
    this.name.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) this.generateCard.click();
    });
    this.generateCard.onclick = () => this.addCard();
    this.drawNumber.onclick = () => this.draw();
  }
}
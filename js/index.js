const oscillator = require("./oscillator");
const slider = require('./slider');

class App {
  constructor() {
    this.oscillator = new oscillator(".input-range.frequency").oscillator;
    this.startButtonElem.addEventListener("click", (event) => {
      this.start();
    });
    this.stopButtonElem.addEventListener("click", (event) => {
      this.stop();
    });
  }

  start() {
    console.log(this.oscillator)
    this.oscillator.start();
  }

  stop() {
    console.log("stop")
    this.oscillator.stop();
  }

  get startButtonElem() {
    return document.querySelector("#start-button");
  }

  get stopButtonElem() {
    return document.querySelector("#stop-button");
  }
}

const app = new App();

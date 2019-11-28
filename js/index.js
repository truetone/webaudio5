const oscillator = require("./oscillator");
const logger = require("truetone-color-logger");

class App {
  constructor() {
    this.logger = new logger(App.name);
    this.oscillator = new oscillator(".input-range.frequency").oscillator;
    this.startButtonElem.addEventListener("click", (event) => {
      this.start();
    });
    this.stopButtonElem.addEventListener("click", (event) => {
      this.stop();
    });
  }

  start() {
    this.logger.log(this.oscillator)
    this.oscillator.start();
  }

  stop() {
    this.logger.log("stop")
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

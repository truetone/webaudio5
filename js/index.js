const oscillator = require("Tone").Oscillator;
const slider = require('./slider');

class App {
  constructor() {
    this.oscillator = new oscillator().toMaster();
    this.frequencySlider = new slider(this.frequencySliderElem).init();
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

  get frequencySliderElem() {
    return document.querySelector(".input-range.frequency");
  }

  get startButtonElem() {
    return document.querySelector("#start-button");
  }

  get stopButtonElem() {
    return document.querySelector("#stop-button");
  }
}

const app = new App();

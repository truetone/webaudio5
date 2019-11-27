const oscillator = require("Tone").Oscillator;
const slider = require('./slider');

class Oscillator {
  constructor(sliderSelector) {
    this.sliderSelector = sliderSelector;
    this.oscillator = new oscillator().toMaster();
    this.frequencySlider = new slider(this.frequencySliderElem).init();
    this.frequencySliderElem.addEventListener("input", (event) => {
      this.onFrequencyInput(event);
    });
  }

  onFrequencyInput(event) {
    this.oscillator.frequency.value = this.frequencySliderElem.value;
  }

  start() {
    this.oscillator.start();
  }

  stop() {
    this.oscillator.stop();
  }

  get frequencySliderElem() {
    return document.querySelector(this.sliderSelector);
  }
}

module.exports = Oscillator;

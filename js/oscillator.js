const toneOscillator = require("tone").Oscillator;
const slider = require('truetone-slider');
const truetoneLogger = require("truetone-color-logger");

class Oscillator {
  static buildFromSelector(sliderSelector) {
    const frequencySliderElem = document.querySelector(sliderSelector);
    const frequencySlider = new slider(frequencySliderElem).init();

    return new this(frequencySliderElem, frequencySlider).addEventListener();
  }

  constructor(frequencySliderElem,
      frequencySlider,
      oscillator=new toneOscillator().toMaster(),
      logger=new truetoneLogger(Oscillator.name)) {
    this.logger = logger;
    this.frequencySliderElem = frequencySliderElem;
    this.oscillator = oscillator;
    this.frequencySlider = frequencySlider;
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

  addEventListener() {
    this.frequencySliderElem.addEventListener("input", (event) => {
      this.onFrequencyInput(event);
    });
    return this;
  }
}

module.exports = Oscillator;

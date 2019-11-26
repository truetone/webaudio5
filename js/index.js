const synth = require("Tone").MonoSynth;
const transport = require("Tone").Transport;
const slider = require('./slider');

class App {
  constructor() {
    this.synth = new synth();
    this.frequencySlider = new slider(this.frequencySliderElem).init();
  }

  start() {
    transport.start();
    this.synth.triggerAttack();
  }

  stop() {
    transport.stop();
    this.synth.triggerRelease();
  }

  get frequencySliderElem() {
    return document.querySelector(".input-range.frequency");
  }
}

const app = new App();

const synth = require("Tone").MonoSynth;
const transport = require("Tone").Transport;

class App {
  constructor() {
    this.synth = new synth();
  }

  start() {
    transport.start();
    this.synth.triggerAttack();
  }

  stop() {
    transport.stop();
    this.synth.triggerRelease();
  }
}

const app = new App();

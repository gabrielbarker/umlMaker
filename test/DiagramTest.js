const assert = require("assert");
const fs = require("fs");
const Diagram = require("../dist/Diagram");

describe("addClass()", () => {
  it("should add a class to the diagram", () => {
    const classSettings = "TESTWAV.wav";
    const emptyTone = new Tone();
    waveWriter.writeWaveFile(emptyTone, filename);
    const exists = fs.existsSync(filename);

    assert(exists, "file should exist");

    fs.unlinkSync(filename);
  });
});

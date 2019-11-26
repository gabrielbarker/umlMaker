const ipc = require("electron").ipcRenderer;
drawSomeClasses();

function drawSomeClasses() {
  const Diagram = require("./dist/Diagram").default;
  const ClassObject = require("./dist/ClassObject").default;

  const diagram = new Diagram();

  const carClass = new ClassObject();
  carClass.setName("Car");
  carClass.setMethods(["drive", "steer", "brake"]);
  carClass.setVariables(["gears", "pedals"]);
  diagram.addObject(carClass);

  const bikeClass = new ClassObject();
  bikeClass.setName("Bike");
  bikeClass.setMethods(["pedal", "steer", "brake"]);
  bikeClass.setVariables(["gears", "pedals", "basket"]);
  diagram.addObject(bikeClass);

  diagram.Objects.forEach(o => {
    document.querySelector("body").innerHTML += o.draw();
  });
}

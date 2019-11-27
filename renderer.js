const ipc = require("electron").ipcRenderer;
drawSomeClasses();

function drawSomeClasses() {
  const Diagram = require("./dist/Diagram").default;
  const ClassObject = require("./dist/ClassObject").default;
  const InterfaceObject = require("./dist/InterfaceObject").default;
  const DragHandler = require("./dist/DragHandler").default;

  const dragHandler = new DragHandler();
  const diagram = new Diagram();

  const carClass = new ClassObject();
  carClass.setName("Car");
  carClass.setMethods(["drive", "steer", "brake"]);
  carClass.setVariables(["gears", "pedals"]);
  diagram.addObject(carClass);

  const bikeInterface = new InterfaceObject();
  bikeInterface.setName("Bike");
  bikeInterface.setMethods(["steer", "brake"]);
  bikeInterface.setVariables(["gears", "pedals", "basket"]);
  // diagram.addObject(bikeInterface);

  diagram.Objects.forEach(o => {
    document.querySelector("body").innerHTML += o.draw();
  });

  dragHandler.dragElement(document.querySelector(".Class"));
}

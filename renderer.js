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
  diagram.addObject(bikeInterface);

  const vanClass = new ClassObject();
  vanClass.setName("Van");
  vanClass.setMethods(["drive", "steer", "brake"]);
  vanClass.setVariables(["gears", "pedals"]);
  diagram.addObject(vanClass);

  const trikeInterface = new InterfaceObject();
  trikeInterface.setName("Trike");
  trikeInterface.setMethods(["steer", "brake"]);
  trikeInterface.setVariables(["gears", "pedals", "basket"]);
  diagram.addObject(trikeInterface);

  diagram.Objects.forEach(o => {
    document.querySelector("body").innerHTML += o.html();
  });

  const allObjects = document.querySelectorAll(".Object");
  allObjects.forEach(o => dragHandler.dragElement(o));
}

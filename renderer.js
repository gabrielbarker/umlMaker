const ipc = require("electron").ipcRenderer;
const DragHandler = require("./dist/DragHandler").default;
drawSomeClasses();

function drawSomeClasses() {
  const Diagram = require("./dist/Diagram").default;
  const ClassObject = require("./dist/ClassObject").default;
  const InterfaceObject = require("./dist/InterfaceObject").default;

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

  carClass.setInherits(bikeInterface);
  trikeInterface.setInherits(vanClass);
  trikeInterface.getImplements().push(vanClass);

  console.log(bikeInterface);
  const objects = diagram.Objects;
  for (let i = 1; i < objects.length; i++) {
    document.querySelector("svg").innerHTML += objects[0].htmlArrowTo(objects[i]);
  }

  diagram.Objects.forEach(o => {
    document.querySelector("body").appendChild(createDraggableElement(o));
  });
}

function createDraggableElement(object) {
  const dragHandler = new DragHandler();
  const div = document.createElement("div");
  div.innerHTML = object.html();
  const element = div.querySelector("div");
  element.style.left = object.getPosition()[0];
  element.style.top = object.getPosition()[1];
  dragHandler.dragElement(element, object);
  return element;
}

function createArrowBetweenObjects(from, to) {
  const div = document.createElement("div");
  const svgLine = from.htmlArrowTo(to);
  div.innerHTML += svgLine;
  return div.querySelector("line");
}

function getArrowBetween(from, to) {
  return document.querySelector(`${from.getName()}-${to.getName()}-line`);
}

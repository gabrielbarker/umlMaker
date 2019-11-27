import ClassLikeObject from "./ClassLikeObject";

export default class DragHandler {
  // Make the DIV element draggable:
  dragElement(elmnt: HTMLElement, object: ClassLikeObject) {
    let mouseNewX = 0,
      mouseNewY = 0,
      mouseInitX = 0,
      mouseInitY = 0;

    if (document.getElementById(elmnt.id + "header")) {
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e: MouseEvent) {
      //e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      mouseInitX = e.clientX;
      mouseInitY = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e: MouseEvent) {
      //e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      mouseNewX = mouseInitX - e.clientX;
      mouseNewY = mouseInitY - e.clientY;
      mouseInitX = e.clientX;
      mouseInitY = e.clientY;
      // set the element's new position:

      object.setPosition([
        elmnt.offsetLeft - mouseNewX,
        elmnt.offsetTop - mouseNewY
      ]);

      elmnt.style.left = object.getPosition()[0] + "px";
      elmnt.style.top = object.getPosition()[1] + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}

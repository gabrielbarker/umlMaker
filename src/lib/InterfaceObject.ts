import ClassLikeObject from "./ClassLikeObject";
import { ObjectType } from "./ObjectType";
import IObject from "./IObject";

export default class InterfaceObject extends ClassLikeObject {
  constructor() {
    super();
    this.setType(ObjectType.Interface);
  }
  drawArrowFrom(from: IObject) {
    console.log(`Arrow drawn from ${from.getName()} to ${this.getName()}`);
    return;
  }
}

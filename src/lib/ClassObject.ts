import ClassLikeObject from "./ClassLikeObject";
import { ObjectType } from "./ObjectType";
import IObject from "./IObject";

export default class ClassObject extends ClassLikeObject {
  constructor() {
    super();
    this.setType(ObjectType.Class);
  }

  drawArrowFrom(from: IObject) {
    console.log(`Arrow drawn from ${from.getName()} to ${this.getName()}`);
    return;
  }
}

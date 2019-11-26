import IObject from "./IObject";

export default class Diagram {
  private _Objects: IObject[] = [];

  addObject(Object: IObject) {
    this.Objects.push(Object);
  }

  get Objects(): IObject[] {
    return this._Objects;
  }

  set Objects(Objects: IObject[]) {
    this._Objects = Objects;
  }
}

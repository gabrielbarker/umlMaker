import { ObjectType } from "./ObjectType";

export default interface IObject {
  getType(): ObjectType;
  getName(): string;
  getPosition(): [number, number];

  setType(type: ObjectType): void;
  setName(name: String): void;
  setPosition(position: [number, number]): void;

  html(): string;
  drawArrowFrom(from: IObject): void;
}

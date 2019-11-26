import IObject from "./IObject";
import { ObjectType } from "./ObjectType";

export default class ClassLikeObject implements IObject {
  private _type: ObjectType = ObjectType.Default;
  private _name: string = "ClassLikeObject";
  private _position: [number, number] = [0, 0];
  private _inherits: IObject = this;
  private _implements: IObject[] = [];
  private _methods: string[] = [];
  private _variables: string[] = [];

  getType(): ObjectType {
    return this._type;
  }

  getName(): string {
    return this._name;
  }

  getPosition(): [number, number] {
    return this._position;
  }

  getInherits(): IObject {
    return this._inherits;
  }

  getImplements(): IObject[] {
    return this._implements;
  }

  getMethods(): string[] {
    return this._methods;
  }

  getVariables(): string[] {
    return this._variables;
  }

  setType(type: ObjectType) {
    this._type = type;
  }

  setName(name: string) {
    this._name = name;
  }

  setPosition(position: [number, number]) {
    this._position = position;
  }

  setInherits(inherits: IObject) {
    this._inherits = inherits;
  }

  setImplements(impl: IObject[]) {
    this._implements = impl;
  }

  setMethods(methods: string[]) {
    this._methods = methods;
  }

  setVariables(variables: string[]) {
    this._variables = variables;
  }

  draw() {
    return;
  }

  drawArrowFrom(from: IObject) {
    return;
  }
}

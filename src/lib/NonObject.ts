import IObject from "./IObject";
import IClassLike from "./IClassLike";
import { ObjectType } from "./ObjectType";

export default class NonObject implements IClassLike {
  private _type: ObjectType = ObjectType.None;
  private _name: string = "Not An Object";
  private _position: [number, number] = [0, 0];
  private _inheritedBy: IClassLike[] = [];
  private _implements: IClassLike[] = [];
  private _implementedBy: IClassLike[] = [];
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

  getInheritedBy(): IClassLike[] {
    return this._inheritedBy;
  }

  getImplements(): IClassLike[] {
    return this._implements;
  }
  getImplementedBy(): IClassLike[] {
    return this._implementedBy;
  }

  getMethods(): string[] {
    return this._methods;
  }

  getVariables(): string[] {
    return this._variables;
  }

  setType(type: ObjectType): void {
    return;
  }
  setName(name: string): void {
    return;
  }
  setPosition(position: [number, number]): void {
    return;
  }
  setInheritedBy(inheritedBy: IClassLike[]): void {
    return;
  }
  setImplements(impl: IClassLike[]): void {
    return;
  }
  addToImplements(impl: IClassLike): void {
    return;
  }
  setImplementedBy(impl: IClassLike[]): void {
    return;
  }
  setMethods(methods: string[]): void {
    return;
  }
  setVariables(variables: string[]): void {
    return;
  }

  html(): string {
    return "";
  }
  htmlArrowTo(from: IObject): void {
    return;
  }
}

import IObject from "./IObject";
import { ObjectType } from "./ObjectType";
export default interface IClassLike extends IObject {
  getType(): ObjectType;
  getName(): string;
  getPosition(): [number, number];
  getInheritedBy(): IClassLike[];
  getImplements(): IClassLike[];
  getImplementedBy(): IClassLike[];
  getMethods(): string[];
  getVariables(): string[];

  setType(type: ObjectType): void;
  setName(name: string): void;
  setPosition(position: [number, number]): void;
  setInheritedBy(inheritedBy: IClassLike[]): void;
  setImplements(impl: IClassLike[]): void;
  addToImplements(impl: IClassLike): void;
  setImplementedBy(impl: IClassLike[]): void;
  setMethods(methods: string[]): void;
  setVariables(variables: string[]): void;
}

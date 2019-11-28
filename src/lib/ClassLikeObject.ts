import IObject from "./IObject";
import { ObjectType } from "./ObjectType";
import DragHandler from "./DragHandler";
import IDraggable from "./IDragabble";

export default abstract class ClassLikeObject implements IObject, IDraggable {
  private _type: ObjectType = ObjectType.Default;
  private _name: string = "ClassLikeObject";
  private _position: [number, number] = [
    Math.floor(Math.random() * 900),
    Math.floor(Math.random() * 700)
  ];
  private _inherits: IObject = this;
  private _implements: IObject[] = [];
  private _methods: string[] = [];
  private _variables: string[] = [];

  public dragHandler = new DragHandler();

  //#region Getters/Setters
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
  //#endregion

  html(): string {
    const methods = this.getMethods();
    const variables = this.getVariables();

    let html = `<div id="${this.getName()}" class="${this.getType()} ClassLike Object">`;
    if (this.getType() === ObjectType.Interface) html += `<h3>interface</h3>`;
    html += `<h1>${this.getName()}</h1>	
        <div class="variables">`;
    variables.forEach(v => (html += `<p>+${v}</p>`));
    html += `</div>	
        <div class="methods">`;
    methods.forEach(m => (html += `<p>+${m}()</p>`));
    html += `</div>`;
    html += `</div>`;
    return html;
  }

  htmlArrowTo(to: IObject) {
    const fromPosition = this.getPosition();
    const toPosition = to.getPosition();
    let svgLine = `<line x1="${fromPosition[0]}" y1="${fromPosition[1]}" x2="${toPosition[0]}" y2="${toPosition[1]}" stroke="rgb(255,0,0)" stroke-width="2"></line>`;
    return svgLine;
  }
}

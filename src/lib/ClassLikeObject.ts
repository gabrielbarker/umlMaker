import IObject from "./IObject";
import { ObjectType } from "./ObjectType";
import DragHandler from "./DragHandler";
import IDraggable from "./IDragabble";
import IClassLike from "./IClassLike";
import NonObject from "./NonObject";

export default abstract class ClassLikeObject implements IClassLike, IDraggable {
  private _type: ObjectType = ObjectType.Default;
  private _name: string = "ClassLikeObject";
  private _position: [number, number] = [
    Math.floor(Math.random() * 900),
    Math.floor(Math.random() * 700)
  ];
  private _inherits: IClassLike = new NonObject();
  private _inheritedBy: IClassLike[] = [];
  private _implements: IClassLike[] = [];
  private _implementedBy: IClassLike[] = [];
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

  getInherits(): IClassLike {
    return this._inherits;
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
    this._type = type;
  }

  setName(name: string): void {
    this._name = name;
  }

  setPosition(position: [number, number]): void {
    this._position = position;
  }

  setInherits(inherits: IClassLike): void {
    this._inherits = inherits;
    inherits.getInheritedBy().push(this);
  }

  setInheritedBy(inheritedBy: IClassLike[]): void {
    this._inheritedBy = inheritedBy;
  }

  setImplements(impl: IClassLike[]): void {
    this._implements = impl;
  }

  addToImplements(impl: IClassLike): void {
    this._implements.push(impl);
  }

  setImplementedBy(impl: IClassLike[]): void {
    this._implementedBy = impl;
  }

  setMethods(methods: string[]): void {
    this._methods = methods;
  }

  setVariables(variables: string[]): void {
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
    let svgLine = `<line class="arrow" id="${this.getName()}-${to.getName()}-line"
     x1="${fromPosition[0]}" y1="${fromPosition[1]}" 
     x2="${toPosition[0]}" y2="${toPosition[1]}"
    stroke="rgb(255,0,0)" stroke-width="2"></line>`;
    return svgLine;
  }

  getAllArrows() {
    const arrowsTo = [];
    const arrowsFrom = [];

    this.getImplements().forEach(i => arrowsTo.push(`#${this.getName()}-${i.getName()}-line`));
    arrowsTo.push(`#${this.getName()}-${this.getInherits().getName()}-line`);

    this.getImplementedBy().forEach(i => arrowsFrom.push(`#${i.getName()}-${this.getName()}-line`));
    this.getInheritedBy().forEach(i => arrowsFrom.push(`#${i.getName()}-${this.getName()}-line`));

    return {
      arrowsTo: arrowsTo,
      arrowsFrom: arrowsFrom
    };
  }
}

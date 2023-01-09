import { IColor } from "./IColor";

export abstract class Shape {
  private _color!: IColor;
  public get color(): IColor {
    return this._color;
  }
  public set color(value: IColor) {
    this._color = value;
  }
  getColor(): string {
    return this.color.getColor();
  }
}

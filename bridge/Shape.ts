import { IColor } from "./IColor";

export abstract class Shape {
  private color!: IColor;
  getColor(): string {
    return this.color.getColor();
  }
}

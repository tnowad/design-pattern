import { IShape } from "./IShape";
import { LegacyRectangle } from "./LegacyRectangle";

export class RectangleAdapter implements IShape {
  private legacyRectangle: LegacyRectangle;
  constructor(legacyRectangle: LegacyRectangle) {
    this.legacyRectangle = legacyRectangle;
  }
  draw(x1: number, y1: number, x2: number, y2: number): void {
    const x: number = Math.min(x1, x2);
    const y: number = Math.min(y1, y2);
    const width: number = Math.abs(x2 - x1);
    const height: number = Math.abs(y2 - y1);
  }
}

import { IShape } from "./IShape";
import { LegacyLine } from "./LegacyLine";

export class LineAdapter implements IShape {
  private legacyLine: LegacyLine;
  constructor(legacyLine: LegacyLine) {
    this.legacyLine = legacyLine;
  }
  draw(x1: number, y1: number, x2: number, y2: number): void {
    this.legacyLine.draw(x1, y1, x2, y2);
  }
}

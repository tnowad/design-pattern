import { IShape } from "./IShape";
import { LegacyLine } from "./LegacyLine";
import { LegacyRectangle } from "./LegacyRectangle";
import { LineAdapter } from "./LineAdapter";
import { RectangleAdapter } from "./RectangleAdapter";

const shapes: IShape[] = [
  new LineAdapter(new LegacyLine()),
  new RectangleAdapter(new LegacyRectangle()),
];

shapes.forEach((shape: IShape) => {
  const x1 = 5;
  const y1 = 3;
  const x2 = 10;
  const y2 = 11;
  shape.draw(x1, y1, x2, y2);
});

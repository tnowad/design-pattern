import { IVisitor } from "./IVisitor";

export interface IElement {
  accept(visitor: IVisitor): void;
}

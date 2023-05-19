import { IElement } from "./IElement";
import { IVisitor } from "./IVisitor";

export class ConcreteElementB implements IElement {
  public accept(visitor: IVisitor): void {
    visitor.visitConcreteElementB(this);
  }

  public operationB(): void {
    console.log("Operation B of ConcreteElementA");
  }
}

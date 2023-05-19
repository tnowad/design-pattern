import { IElement } from "./IElement";
import { IVisitor } from "./IVisitor";

export class ConcreteElementA implements IElement {
  public accept(visitor: IVisitor): void {
    visitor.visitConcreteElementA(this);
  }

  public operationA(): void {
    console.log("Operation A of ConcreteElementA");
  }
}

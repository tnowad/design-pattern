import { ConcreteElementA } from "./ConcreteElementA";
import { ConcreteElementB } from "./ConcreteElementB";
import { IVisitor } from "./IVisitor";

export class ConcreteVisitor implements IVisitor {
  public visitConcreteElementA(element: ConcreteElementA): void {
    console.log("ConcreteVisitor visits ConcreteElementA");
    element.operationA();
  }

  public visitConcreteElementB(element: ConcreteElementB): void {
    console.log("ConcreteVisitor visits ConcreteElementB");
    element.operationB();
  }
}

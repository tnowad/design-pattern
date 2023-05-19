import { ConcreteElementA } from "./ConcreteElementA";
import { ConcreteElementB } from "./ConcreteElementB";
import { ConcreteVisitor } from "./ConcreteVisitor";
import { IElement } from "./IElement";
import { IVisitor } from "./IVisitor";

const elements: IElement[] = [new ConcreteElementA(), new ConcreteElementB()];
const visitor: IVisitor = new ConcreteVisitor();

for (const element of elements) {
  element.accept(visitor);
}

import { ConcreteStateA } from "./ConcreteStateA";
import { Context } from "./Context";

const context: Context = new Context(new ConcreteStateA());
context.request1();
context.request2();

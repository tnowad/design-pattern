import { ConcreteStateA } from "./ConcreteStateA";
import { State } from "./State";

export class ConcreteStateB extends State {
  public handle1(): void {
    console.log(`ConcreteStateB handles request1.`);
  }
  public handle2(): void {
    console.log(`ConcreteStateB handles request2.`);
    console.log(`ConcreteStateB wants to change the state of the context.`);
    this.context.transitionTo(new ConcreteStateA());
  }
}

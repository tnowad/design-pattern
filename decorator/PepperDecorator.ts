import { IPizza } from "./IPizza";
import { PizzaDecorator } from "./PizzaDecorator";

export class PepperDecorator extends PizzaDecorator {
  constructor(pizza: IPizza) {
    super(pizza);
  }

  doPizza(): string {
    return `${this.pizza.doPizza()} + ${this.addPepper()}`;
  }

  addPepper(): string {
    return "Pepper";
  }
}

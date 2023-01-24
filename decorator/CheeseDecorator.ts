import { IPizza } from "./IPizza";
import { PizzaDecorator } from "./PizzaDecorator";

export class CheeseDecorator extends PizzaDecorator {
  constructor(pizza: IPizza) {
    super(pizza);
  }

  doPizza(): string {
    return `${this.pizza.doPizza()} + ${this.addCheese()}`;
  }

  addCheese(): string {
    return "Cheese";
  }
}

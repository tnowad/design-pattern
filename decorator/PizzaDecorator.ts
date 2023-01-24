import { IPizza } from "./IPizza";

export abstract class PizzaDecorator implements IPizza {
  private _pizza: IPizza;
  constructor(pizza: IPizza) {
    this._pizza = pizza;
  }

  doPizza(): string {
    throw new Error("Method not implemented.");
  }

  public get pizza(): IPizza {
    return this._pizza;
  }
  public set pizza(value: IPizza) {
    this._pizza = value;
  }
}

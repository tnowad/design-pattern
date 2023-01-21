import { IPizza } from "./IPizza";

export class ChickenPizza implements IPizza {
  doPizza(): string {
    return "Making Chicken Pizza";
  }
}

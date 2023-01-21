import { IPizza } from "./IPizza";

export class TomatoPizza implements IPizza {
  doPizza(): string {
    return "Making Tomato Pizza";
  }
}

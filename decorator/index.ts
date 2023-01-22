import { ChickenPizza } from "./ChickenPizza";
import { IPizza } from "./IPizza";
import { TomatoPizza } from "./TomatoPizza";

const tomatoPizza: IPizza = new TomatoPizza();
const chickenPizza: IPizza = new ChickenPizza();

console.log(tomatoPizza.doPizza());
console.log(chickenPizza.doPizza());

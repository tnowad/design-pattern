import { CheeseDecorator } from "./CheeseDecorator";
import { ChickenPizza } from "./ChickenPizza";
import { IPizza } from "./IPizza";
import { PepperDecorator } from "./PepperDecorator";
import { PizzaDecorator } from "./PizzaDecorator";
import { TomatoPizza } from "./TomatoPizza";

const tomatoPizza: IPizza = new TomatoPizza();
const chickenPizza: IPizza = new ChickenPizza();

console.log(tomatoPizza.doPizza());
console.log(chickenPizza.doPizza());

console.log(new CheeseDecorator(tomatoPizza).doPizza());
console.log(new PepperDecorator(new CheeseDecorator(tomatoPizza)).doPizza());
console.log(new PepperDecorator(new CheeseDecorator(chickenPizza)).doPizza());

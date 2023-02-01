import { Car } from "./Car";

export class Flyweight {
  private sharedState: Car;
  constructor(car: Car) {
    this.sharedState = car;
  }
  operation(uniqueState: Car) {
    console.log(`Flyweight: `);
  }
}

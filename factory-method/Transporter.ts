import { ICar } from "./ICar";

export abstract class Transporter implements ICar {
  abstract createCar(): ICar;

  createVehicle(): string {
    const car = this.createCar();
    const result = `Transporter: The '${car.createVehicle()}' been created`;
    return result;
  }
}

import { ICar } from "./ICar";

export class Truck implements ICar {
  createVehicle(): string {
    return "Truck";
  }
}

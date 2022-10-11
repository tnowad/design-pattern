import { ICar } from "./ICar";

export class Bus implements ICar {
  createVehicle(): string {
    return "Bus";
  }
}

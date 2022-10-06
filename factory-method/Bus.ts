import { ICar } from "./ICar";

class Bus implements ICar {
  createVehicle(): string {
    return "Bus";
  }
}

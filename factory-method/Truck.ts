import { ICar } from "./ICar";

class Truck implements ICar {
  createVehicle(): string {
    return "Truck";
  }
}

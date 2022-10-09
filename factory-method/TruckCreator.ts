import { ICar } from "./ICar";
import { Transporter } from "./Transporter";
import { Truck } from "./Truck";

export class TruckCreator extends Transporter {
  createCar(): ICar {
    return new Truck();
  }
}

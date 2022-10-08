import { Bus } from "./Bus";
import { ICar } from "./ICar";
import { Transporter } from "./Transporter";

class BusCreator extends Transporter {
  createCar(): ICar {
    return new Bus();
  }
}

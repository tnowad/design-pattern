import { BusCreator } from "./BusCreator";
import { TruckCreator } from "./TruckCreator";

const truckCreator = new TruckCreator();
const busCreator = new BusCreator();

console.log(truckCreator.createVehicle());
console.log(busCreator.createVehicle());

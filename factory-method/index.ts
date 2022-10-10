import { BusCreator } from "./BusCreator";
import { TruckCreator } from "./TruckCreator";

const truckCreator = new TruckCreator();

truckCreator.createVehicle();

const busCreator = new BusCreator();

busCreator.createVehicle();

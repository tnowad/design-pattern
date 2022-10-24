import { PlasticChair } from "./PlasticChair";
import { FurnitureAbstractFactory } from "./FurnitureAbstractFactory";
import { IChair } from "./IChair";
import { ITable } from "./ITable";

export class PlasticFactory extends FurnitureAbstractFactory {
  createChair(): IChair {
    return new PlasticChair();
  }
  createTable(): ITable {
    throw new Error("Method not implemented.");
  }
}

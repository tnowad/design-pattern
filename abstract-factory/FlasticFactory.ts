import { FurnitureAbstractFactory } from "./FurnitureAbstractFactory";
import { IChair } from "./IChair";
import { ITable } from "./ITable";

export class FlasticFactory extends FurnitureAbstractFactory {
  createChair(): IChair {
    throw new Error("Method not implemented.");
  }
  createTable(): ITable {
    throw new Error("Method not implemented.");
  }
}

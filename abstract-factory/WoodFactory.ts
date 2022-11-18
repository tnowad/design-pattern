import { FurnitureAbstractFactory } from "./FurnitureAbstractFactory";
import { IChair } from "./IChair";
import { ITable } from "./ITable";
import { WoodChair } from "./WoodChair";
import { WoodTable } from "./WoodTable";

export class WoodFactory extends FurnitureAbstractFactory {
  createChair(): IChair {
    return new WoodChair();
  }
  createTable(): ITable {
    return new WoodTable();
  }
}

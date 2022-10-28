import { PlasticChair } from "./PlasticChair";
import { FurnitureAbstractFactory } from "./FurnitureAbstractFactory";
import { IChair } from "./IChair";
import { ITable } from "./ITable";
import { PlasticTable } from "./PlasticTable";

export class PlasticFactory extends FurnitureAbstractFactory {
  createChair(): IChair {
    return new PlasticChair();
  }
  createTable(): ITable {
    return new PlasticTable();
  }
}

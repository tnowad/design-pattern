import { IChair } from "./IChair";
import { ITable } from "./ITable";

export abstract class FurnitureAbstractFactory {
  abstract createChair(): IChair;
  abstract createTable(): ITable;
}

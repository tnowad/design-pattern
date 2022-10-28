import { ITable } from "./ITable";

export class PlasticTable implements ITable {
  create(): void {
    console.log("Create plastic table");
  }
}

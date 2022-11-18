import { ITable } from "./ITable";

export class WoodTable implements ITable {
  create(): void {
    console.log("Create wood table");
  }
}

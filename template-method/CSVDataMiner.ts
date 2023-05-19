import { DataMiner } from "./DataMiner";

export class CSVDataMiner extends DataMiner {
  public extractData(): void {
    console.log("Extract CSV");
  }
  public parseData(): void {
    console.log("Parse CSV");
  }
}

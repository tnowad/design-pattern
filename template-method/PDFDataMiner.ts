import { DataMiner } from "./DataMiner";

export class PDFDataMiner extends DataMiner {
  public extractData(): void {
    console.log("Extract PDF");
  }
  public parseData(): void {
    console.log("Parse PDF");
  }
}

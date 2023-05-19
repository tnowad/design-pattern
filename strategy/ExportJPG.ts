import { IExport } from "./IExport";

export class ExportJPG implements IExport {
  exportFile(filename: string): void {
    console.log(`Export file: ${filename}.jpg successfully`);
  }
}

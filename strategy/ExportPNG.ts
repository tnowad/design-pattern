import { IExport } from "./IExport";

export class ExportPNG implements IExport {
  exportFile(filename: string): void {
    console.log(`Export file: ${filename}.png successfully`);
  }
}

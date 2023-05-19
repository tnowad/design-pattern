import { IExport } from "./IExport";

export class ExportPDF implements IExport {
  exportFile(filename: string): void {
    console.log(`Export file: ${filename}.pdf successfully`);
  }
}

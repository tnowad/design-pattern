import { IExport } from "./IExport";

export class ExportContext {
  private export: IExport;
  constructor(iExport: IExport) {
    this.export = iExport;
  }
  setStrategy(iExport: IExport) {
    this.export = iExport;
  }
  createArchive(filename: string) {
    this.export.exportFile(filename);
  }
}

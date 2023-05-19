export abstract class DataMiner {
  file!: string;
  rawData!: string;
  openFile(path: string): void {
    console.log(`Open ${path}`);
  }
  closeFile(): void {
    console.log("Close file");
  }
  public abstract extractData(): void;
  public abstract parseData(): void;
  mine(path: string): void {
    this.openFile(path);
    this.extractData();
    this.parseData();
    this.closeFile();
  }
}

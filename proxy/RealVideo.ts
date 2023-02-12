import { IVideo } from "./IVideo";

export class RealVideo implements IVideo {
  private filename: string;
  constructor(filename: string) {
    this.filename = filename;
    this.loadFromDisk(this.filename);
  }
  display(): void {
    throw new Error("Method not implemented.");
  }
  loadFromDisk(filename: string): void {
    console.log(`Loading ${filename}`);
  }
}

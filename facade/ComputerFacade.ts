import { CPU } from "./CPU";
import { HardDrive } from "./HardDrive";
import { Memory } from "./Memory";

export class ComputerFacade {
  private processor: CPU;
  private ram: Memory;
  private hardDrive: HardDrive;
  constructor() {
    this.processor = new CPU();
    this.ram = new Memory();
    this.hardDrive = new HardDrive();
  }
  start(): void {
    this.processor.freeze();
    this.ram.load();
    this.hardDrive.read();
    this.processor.jump(3);
    this.processor.execute();
  }
}

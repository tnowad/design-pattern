import { Fan } from "./Fan";
import { ICommand } from "./ICommand";

export class TurnOffCommand implements ICommand {
  private fan: Fan;
  constructor(fan: Fan) {
    this.fan = fan;
  }
  execute(): void {
    this.fan.turnOff();
  }
  undo(): void {
    this.fan.turnOn();
  }
}

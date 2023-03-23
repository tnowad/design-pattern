import { Fan } from "./Fan";
import { ICommand } from "./ICommand";

export class TurnOnCommand implements ICommand {
  private fan: Fan;
  constructor(fan: Fan) {
    this.fan = fan;
  }
  execute(): void {
    this.fan.turnOn();
  }
  undo(): void {
    this.fan.turnOff();
  }
}

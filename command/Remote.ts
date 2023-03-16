import { ICommand } from "./ICommand";

export class Remote {
  private turnOnCommand: ICommand;
  private turnOffCommand: ICommand;
  constructor(turnOnCommand: ICommand, turnOffCommand: ICommand) {
    this.turnOnCommand = turnOnCommand;
    this.turnOffCommand = turnOffCommand;
  }
  turnOnButtonClick(): void {
    this.turnOnCommand.execute();
  }
  turnOffButtonClick(): void {
    this.turnOffCommand.execute();
  }
}

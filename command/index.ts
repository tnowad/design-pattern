import { Fan } from "./Fan";
import { ICommand } from "./ICommand";
import { Remote } from "./Remote";
import { TurnOffCommand } from "./TurnOffCommand";
import { TurnOnCommand } from "./TurnOnCommand";

const fan: Fan = new Fan();
const turnOnCommand: ICommand = new TurnOnCommand(fan);
const turnOffCommand: ICommand = new TurnOffCommand(fan);

const remote: Remote = new Remote(turnOnCommand, turnOffCommand);

remote.turnOffButtonClick();
remote.turnOnButtonClick();

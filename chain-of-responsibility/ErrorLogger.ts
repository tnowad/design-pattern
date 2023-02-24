import { AbstractLogger } from "./AbstractLogger";
import { LoggerType } from "./LoggerType";

export class ErrorLogger extends AbstractLogger {
  constructor(loggerType: LoggerType) {
    super(loggerType);
  }
  write(message: string): void {
    console.log(`Error Logger:: ${message}`);
  }
}

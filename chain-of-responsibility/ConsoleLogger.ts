import { AbstractLogger } from "./AbstractLogger";
import { LoggerType } from "./LoggerType";

export class ConsoleLogger extends AbstractLogger {
  constructor(loggerType: LoggerType) {
    super(loggerType);
  }
  write(message: string): void {
    console.log(`Console Logger:: ${message}`);
  }
}

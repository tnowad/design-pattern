import { AbstractLogger } from "./AbstractLogger";
import { LoggerType } from "./LoggerType";

export class FileLogger extends AbstractLogger {
  constructor(loggerType: LoggerType) {
    super(loggerType);
  }
  write(message: string): void {
    console.log(`File Logger:: ${message}`);
  }
}

import { LoggerType } from "./LoggerType";

export abstract class AbstractLogger {
  private _nextLogger!: AbstractLogger;
  private loggerType: LoggerType;

  constructor(loggerType: LoggerType) {
    this.loggerType = loggerType;
  }

  logMessage(loggerType: LoggerType, message: string): void {
    if (this.loggerType == loggerType) {
      this.write(message);
    }
    if (this.nextLogger) {
      this.nextLogger.logMessage(loggerType, message);
    }
  }

  abstract write(message: string): void;

  public get nextLogger(): AbstractLogger {
    return this._nextLogger;
  }
  public set nextLogger(value: AbstractLogger) {
    this._nextLogger = value;
  }
}

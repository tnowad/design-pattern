import { LoggerType } from "./LoggerType";

export abstract class AbstractLogger {
  private _nextLogger!: AbstractLogger;
  private _loggerType!: LoggerType;

  public get loggerType(): LoggerType {
    return this._loggerType;
  }
  public set loggerType(value: LoggerType) {
    this._loggerType = value;
  }

  logMessage(loggerType: LoggerType, message: string): void {
    if (this._loggerType <= loggerType) {
      this.write(message);
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

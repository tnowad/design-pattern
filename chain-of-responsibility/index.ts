import { AbstractLogger } from "./AbstractLogger";
import { ConsoleLogger } from "./ConsoleLogger";
import { ErrorLogger } from "./ErrorLogger";
import { FileLogger } from "./FileLogger ";
import { LoggerType } from "./LoggerType";

const errorLogger: AbstractLogger = new ErrorLogger(LoggerType.ERROR);
const fileLogger: AbstractLogger = new FileLogger(LoggerType.DEBUG);
const consoleLogger: AbstractLogger = new ConsoleLogger(LoggerType.INFO);

errorLogger.nextLogger = fileLogger;
fileLogger.nextLogger = consoleLogger;

const chainLogger = errorLogger;

chainLogger.logMessage(LoggerType.INFO, "INFO");
chainLogger.logMessage(LoggerType.DEBUG, "DEBUG");
chainLogger.logMessage(LoggerType.ERROR, "ERROR");

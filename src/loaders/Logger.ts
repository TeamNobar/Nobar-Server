import winston         from "winston";
import winstonDaily    from "winston-daily-rotate-file";
import Environment     from "../utils/Environment";
import { debugLogger } from "./debugLogger";

const logStoragePath = "logs";
const productTransportConsole = new winston.transports.Console();
const devlopmentTransportConsole = new winston.transports.Console({
  format: winston.format.combine(winston.format.cli(), winston.format.splat()),
});
const dailyWarningLogger = new winstonDaily({
  level: "warn",
  datePattern: "YYYY-MM-DD",
  dirname: `${logStoragePath}/warn`,
  filename: "%DATE%.warn.log", // file 이름 날짜로 저장
  maxFiles: 30, // 30일치 로그 파일 저장
  zippedArchive: true,
});
const dailyErrorLogger = new winstonDaily({
  level: "error",
  datePattern: "YYYY-MM-DD",
  dirname: `${logStoragePath}/error`, // error.log 파일은 /logs/error 하위에 저장
  filename: "%DATE%.error.log",
  maxFiles: 30,
  zippedArchive: true,
});

const transports = [];
if (process.env.NODE_ENV === Environment.PRODUCTION) {
  transports.push(productTransportConsole);
  transports.push(dailyWarningLogger);
  transports.push(dailyErrorLogger);
} else {
  transports.push(devlopmentTransportConsole);
}

const Logger = winston.createLogger({
  level: "debug",
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    winston.format.errors({stack: true}),
    winston.format.splat(),
    winston.format.json()
  ),
  transports
});

Logger.stream({
  write: (message: any) => {
    debugLogger(message);
  }
})

export default Logger;

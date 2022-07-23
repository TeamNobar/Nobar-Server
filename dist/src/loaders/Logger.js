"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
const Environment_1 = __importDefault(require("../utils/Environment"));
const debugLogger_1 = require("./debugLogger");
const logStoragePath = "logs";
const productTransportConsole = new winston_1.default.transports.Console();
const devlopmentTransportConsole = new winston_1.default.transports.Console({
    format: winston_1.default.format.combine(winston_1.default.format.cli(), winston_1.default.format.splat()),
});
const dailyWarningLogger = new winston_daily_rotate_file_1.default({
    level: "warn",
    datePattern: "YYYY-MM-DD",
    dirname: `${logStoragePath}/warn`,
    filename: "%DATE%.warn.log",
    maxFiles: 30,
    zippedArchive: true,
});
const dailyErrorLogger = new winston_daily_rotate_file_1.default({
    level: "error",
    datePattern: "YYYY-MM-DD",
    dirname: `${logStoragePath}/error`,
    filename: "%DATE%.error.log",
    maxFiles: 30,
    zippedArchive: true,
});
const transports = [];
if (process.env.NODE_ENV === Environment_1.default.PRODUCTION) {
    transports.push(productTransportConsole);
    transports.push(dailyWarningLogger);
    transports.push(dailyErrorLogger);
}
else {
    transports.push(devlopmentTransportConsole);
}
const Logger = winston_1.default.createLogger({
    level: "debug",
    levels: winston_1.default.config.npm.levels,
    format: winston_1.default.format.combine(winston_1.default.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss"
    }), winston_1.default.format.errors({ stack: true }), winston_1.default.format.splat(), winston_1.default.format.json()),
    transports
});
Logger.stream({
    write: (message) => {
        (0, debugLogger_1.debugLogger)(message);
    }
});
exports.default = Logger;
//# sourceMappingURL=Logger.js.map
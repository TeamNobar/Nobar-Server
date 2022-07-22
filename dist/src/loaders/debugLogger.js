"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.debugLogger = void 0;
const Logger_1 = __importDefault(require("./Logger"));
const debugLogger = (obj) => {
    Logger_1.default.debug(JSON.stringify(obj));
};
exports.debugLogger = debugLogger;
//# sourceMappingURL=debugLogger.js.map
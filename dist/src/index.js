"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const config_1 = __importDefault(require("./config"));
const loaders_1 = __importDefault(require("./loaders"));
const Logger_1 = __importDefault(require("./loaders/Logger"));
const SERVER_START_MESSAGE = `
    ################################################
     🛡️ Server listening on port ${config_1.default.port} 🛡️
    ################################################
 `;
exports.app = (0, express_1.default)();
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        yield loaders_1.default.initalize(exports.app);
        exports.app.listen(config_1.default.port, () => {
            Logger_1.default.info(SERVER_START_MESSAGE);
        }).on("error", (err) => {
            Logger_1.default.error(err);
            process.exit(1);
        });
    });
}
startServer().catch(() => {
    Logger_1.default.info("can not start server");
});
//# sourceMappingURL=index.js.map
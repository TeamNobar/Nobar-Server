"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressAuthentication = void 0;
const config_1 = __importDefault(require("../config"));
const NobarError_1 = __importDefault(require("../error/NobarError"));
const NobarErrorCode_1 = require("../error/NobarErrorCode");
const NobarErrorMessage_1 = __importDefault(require("../error/NobarErrorMessage"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Logger_1 = __importDefault(require("../loaders/Logger"));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function expressAuthentication(request, securityName) {
    var _a;
    if (securityName === "auth0") {
        const token = (_a = request.headers["authorization"]) === null || _a === void 0 ? void 0 : _a.split(" ").reverse()[0];
        if (!token) {
            throw new NobarError_1.default(NobarErrorCode_1.NobarErrorCode.NOT_FOUND_TOKEN, NobarErrorMessage_1.default.NOT_FOUND_TOKEN);
        }
        try {
            return jsonwebtoken_1.default.verify(token, config_1.default.jwtSecret);
        }
        catch (error) {
            Logger_1.default.error(error);
            throw error;
        }
    }
}
exports.expressAuthentication = expressAuthentication;
//# sourceMappingURL=Authentication.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressAuthentication = void 0;
const NobarError_1 = __importDefault(require("../error/NobarError"));
const NobarErrorCode_1 = require("../error/NobarErrorCode");
const NobarErrorMessage_1 = __importDefault(require("../error/NobarErrorMessage"));
function expressAuthentication(request, securityName, scopes) {
    if (securityName === "jwt") {
        const token = request.body.token ||
            request.query.token ||
            request.headers["token"];
        return new Promise((resolve, reject) => {
            if (!token) {
                reject(new NobarError_1.default(NobarErrorCode_1.NobarErrorCode.NOT_FOUND_TOKEN, NobarErrorMessage_1.default.NOT_FOUND_TOKEN));
            }
        });
    }
}
exports.expressAuthentication = expressAuthentication;
//# sourceMappingURL=authentication.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressAuthentication = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
function expressAuthentication(request, securityName, _scopes) {
    if (securityName === "api_key") {
        let token;
        if (request.query && request.query.access_token) {
            token = request.query.access_token;
        }
        if (token === "abc123456") {
            return Promise.resolve({
                id: 1,
                name: "Ironman",
            });
        }
        else {
            return Promise.reject({});
        }
    }
    if (securityName === "jwt") {
        const token = request.body.token ||
            request.query.token ||
            request.headers["token"];
        return new Promise((resolve, reject) => {
            if (!token) {
                reject(new Error("No token provided"));
            }
            jsonwebtoken_1.default.verify(token, config_1.default.jwtSecret, function (err, decoded) {
                if (err) {
                    reject(err);
                }
                else {
                    // Check if JWT contains all required scopes
                    resolve(decoded);
                }
            });
        });
    }
    return new Promise((_, reject) => reject());
}
exports.expressAuthentication = expressAuthentication;
//# sourceMappingURL=expressAuthentication.js.map
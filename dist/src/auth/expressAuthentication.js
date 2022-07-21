"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressAuthentication = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function expressAuthentication(request, securityName, scopes) {
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
            request.headers["x-access-token"];
        return new Promise((resolve, reject) => {
            if (!token) {
                reject(new Error("No token provided"));
            }
            jsonwebtoken_1.default.verify(token, "[secret]", function (err, decoded) {
                if (err) {
                    reject(err);
                }
                else {
                    // Check if JWT contains all required scopes
                    if (!scopes) {
                        resolve(decoded);
                        return;
                    }
                    for (const scope of scopes) {
                        if (!decoded.scopes.includes(scope)) {
                            reject(new Error("JWT does not contain required scope."));
                        }
                    }
                    resolve(decoded);
                }
            });
        });
    }
    return new Promise((_, reject) => reject());
}
exports.expressAuthentication = expressAuthentication;
//# sourceMappingURL=expressAuthentication.js.map
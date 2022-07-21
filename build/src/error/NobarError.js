"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NobarError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
}
exports.default = NobarError;
//# sourceMappingURL=NobarError.js.map
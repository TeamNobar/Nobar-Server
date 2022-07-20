"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseWrapper {
    static successOf(status, messgae, data) {
        return {
            status: status,
            message: messgae,
            data: data
        };
    }
    static failureOf(status, messgae, data) {
        return {
            status: status,
            message: messgae,
            data: data
        };
    }
}
exports.default = ResponseWrapper;
//# sourceMappingURL=ResponseWrapper.js.map
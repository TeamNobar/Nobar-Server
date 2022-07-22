"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slackMessage = void 0;
const slackMessage = (method, originalUrl, error, uid) => {
    return `[ERROR] [${method} ${originalUrl} ${uid ? `uid: ${uid}` : "req.user 없음"} ${JSON.stringify(error)}`;
};
exports.slackMessage = slackMessage;
//# sourceMappingURL=returnToSlackMessage.js.map
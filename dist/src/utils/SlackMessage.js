"use strict";
// import express, { Request, Response } from "express";
// import ProjectLoader from "../loaders";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackMessage = void 0;
class SlackMessage {
}
exports.SlackMessage = SlackMessage;
_a = SlackMessage;
SlackMessage.webhookURI = "https://hooks.slack.com/services/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";
SlackMessage.options = {
    uri: _a.webhookURI,
    method: "POST",
    body: {
        channel: "#server notification",
        username: "Alert Bot",
        icon_emoji: ":ghost:",
        text: "value"
    },
    json: true
};
//# sourceMappingURL=SlackMessage.js.map
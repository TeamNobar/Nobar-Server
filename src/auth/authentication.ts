import express            from "express";
import NobarError         from "../error/NobarError";
import { NobarErrorCode } from "../error/NobarErrorCode";
import NobarErrorMessage  from "../error/NobarErrorMessage";

export function expressAuthentication(
  request: express.Request,
  securityName: string,
  scopes?: string[]
) {
  if (securityName === "jwt") {
    const token =
      request.body.token ||
      request.query.token ||
      request.headers["token"];

    return new Promise((resolve, reject)=> {
      if (!token) {
        reject(new NobarError(NobarErrorCode.NOT_FOUND_TOKEN, NobarErrorMessage.NOT_FOUND_TOKEN));
      }
    })
  }
}
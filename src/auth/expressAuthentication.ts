import express            from "express";
import jwt                from "jsonwebtoken"
import config             from "../config";
import NobarError         from "../error/NobarError";
import { NobarErrorCode } from "../error/NobarErrorCode";
import NobarErrorMessage  from "../error/NobarErrorMessage";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function expressAuthentication(
  request: express.Request,
  securityName: string
) {
  if (securityName === "auth0") {
    const token = request.headers["authorization"]?.split(" ").reverse()[0];
    return new Promise(((resolve, reject) => {
      if (!token) {
        throw new NobarError(NobarErrorCode.NOT_FOUND_TOKEN, NobarErrorMessage.NOT_FOUND_TOKEN);
      }
      jwt.verify(token, config.jwtSecret, function (err: jwt.VerifyErrors | null, decoded: string | jwt.JwtPayload | undefined) {
        if (err) {
          reject(err);
        } else {
          resolve(decoded);
        }
      });
    }))
  }
}
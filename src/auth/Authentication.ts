import express            from "express";
import config             from "../config";
import NobarError         from "../error/NobarError";
import { NobarErrorCode } from "../error/NobarErrorCode";
import NobarErrorMessage  from "../error/NobarErrorMessage";
import jwt                from "jsonwebtoken"
import logger             from "../loaders/Logger";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function expressAuthentication(
  request: express.Request,
  securityName: string
) {
  if (securityName === "auth0") {
    const token = request.headers["authorization"]?.split(" ").reverse()[0];
    if (!token) {
      throw new NobarError(NobarErrorCode.NOT_FOUND_TOKEN, NobarErrorMessage.NOT_FOUND_TOKEN);
    }
    try {
      return jwt.verify(token, config.jwtSecret);
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }
}
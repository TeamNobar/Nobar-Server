import logger from "./Logger";

export const debugLogger = (obj: any) => {
  logger.debug(JSON.stringify(obj));
}
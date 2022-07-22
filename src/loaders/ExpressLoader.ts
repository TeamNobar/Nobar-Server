import { config as dotenvConfig }                   from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import morgan                                       from "morgan";
import { slackMessage } from "../utils/returnToSlackMessage";
import { sendMessageToSlack } from "../utils/SlackAPI";
import { ValidateError }                            from "tsoa";
import { RegisterRoutes }                           from "../../build/routes";
import NobarError                                   from "../error/NobarError";
import Environment                                  from "../utils/Environment";
import { errorMessage }                             from "../utils/errorMessage";
import ErrorType                                    from "../utils/ErrorType";
import ResponseWrapper                              from "../utils/ResponseWrapper";
import StatusCode                                   from "../utils/StatusCode";
import logger                                       from "./Logger";
import Logger                                       from "./Logger";

export default class ExpressLoader {
  private readonly morganFormat: string;

  private notFoundHandler = (
    err: unknown,
    req: Request,
    _res: Response,
    next: NextFunction
  ): void => {
    const notFoundError: ErrorType = {
      status: StatusCode.NOT_FOUND,
      message: errorMessage.NOT_FOUND,
    };
    const errorMessageForSlack: string = slackMessage(req.method.toUpperCase(), req.originalUrl, err, req.body.user?.id);
    sendMessageToSlack(errorMessageForSlack);
    next(notFoundError);
    return;
  };

  private validateErrorHandler = (
    err: unknown,
    req: Request,
    _res: Response,
    next: NextFunction                 
  ): Response | void => {
    if (err instanceof ValidateError) {
      Logger.warn(`Caught Validation Error for ${req.path}: \n ${err.fields}`);
      const validateError: ErrorType = {
        status: StatusCode.VALIDATION_FAILED,
        message: err?.fields,
      };
      const errorMessageForSlack: string = slackMessage(req.method.toUpperCase(), req.originalUrl, err, req.body.user?.id);
      sendMessageToSlack(errorMessageForSlack);
      next(validateError);
      return;
    }
    if (err instanceof NobarError) {
      logger.warn(`Caught Error for ${req.path}: \n ${err.message}`)
      _res.status(Math.floor(err.status / 10))
        .json(err);
    }
    const errorMessageForSlack: string = slackMessage(req.method.toUpperCase(), req.originalUrl, err, req.body.user?.id);
    sendMessageToSlack(errorMessageForSlack);
    next(err);
    return;
  };

  private catchAllErrorHandler = (
    err: ErrorType,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === Environment.PRODUCTION ? err : {};
    const responseData = ResponseWrapper.failureOf(
      err.status || StatusCode.INTERNAL_SERVER_ERROR,
      err.message || errorMessage.INTERNAL_SERVER_ERROR
    );
    res.status(err.status || StatusCode.INTERNAL_SERVER_ERROR)
      .json(responseData);
    const errorMessageForSlack: string = slackMessage(req.method.toUpperCase(), req.originalUrl, err, req.body.user?.id);
    sendMessageToSlack(errorMessageForSlack);   
    next(err);
  };

  constructor(private app: express.Application) {
    dotenvConfig();
    this.morganFormat =
      process.env.NODE_ENV === "production" ? "combined" : "dev";
    this.initialize();
  }

  public static initalize(app: express.Application): ExpressLoader {
    return new ExpressLoader(app);
  }

  private initialize(): void {
    this.setUpDefaultMiddleware();
    this.setUpMarganLogger();
    RegisterRoutes(this.app);
    this.setUpErrorHandler();
  }

  private setUpDefaultMiddleware(): void {
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.json());
  }

  private setUpMarganLogger(): void {
    this.app.use(
      morgan(this.morganFormat, {
        skip: (_req, res) => res.statusCode < 400,
        stream: {
          write(message: string) {
            Logger.info(message);
          },
        },
      })
    );
  }

  private setUpErrorHandler(): void {
    this.app.use(this.notFoundHandler);
    this.app.use(this.validateErrorHandler);
    this.app.use(this.catchAllErrorHandler);
  }
}


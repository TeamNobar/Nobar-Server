"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const tsoa_1 = require("tsoa");
const routes_1 = require("../../build/routes");
const NobarError_1 = __importDefault(require("../error/NobarError"));
const Environment_1 = __importDefault(require("../utils/Environment"));
const errorMessage_1 = require("../utils/errorMessage");
const ResponseWrapper_1 = __importDefault(require("../utils/ResponseWrapper"));
const StatusCode_1 = __importDefault(require("../utils/StatusCode"));
const Logger_1 = __importDefault(require("./Logger"));
const Logger_2 = __importDefault(require("./Logger"));
class ExpressLoader {
    constructor(app) {
        this.app = app;
        this.notFoundHandler = (_req, _res, next) => {
            const notFoundError = {
                status: StatusCode_1.default.NOT_FOUND,
                message: errorMessage_1.errorMessage.NOT_FOUND,
            };
            next(notFoundError);
            return;
        };
        this.validateErrorHandler = (err, req, _res, next) => {
            if (err instanceof tsoa_1.ValidateError) {
                Logger_2.default.warn(`Caught Validation Error for ${req.path}: \n ${err.fields}`);
                const validateError = {
                    status: StatusCode_1.default.VALIDATION_FAILED,
                    message: err === null || err === void 0 ? void 0 : err.fields,
                };
                next(validateError);
                return;
            }
            if (err instanceof NobarError_1.default) {
                Logger_1.default.warn(`Caught Error for ${req.path}: \n ${err.message}`);
                _res.status(Math.floor(err.status / 10))
                    .json(err);
                return;
            }
            next(err);
            return;
        };
        this.catchAllErrorHandler = (err, req, res, next) => {
            res.locals.message = err.message;
            res.locals.error = req.app.get("env") === Environment_1.default.PRODUCTION ? err : {};
            const responseData = ResponseWrapper_1.default.failureOf(err.status || StatusCode_1.default.INTERNAL_SERVER_ERROR, err.message || errorMessage_1.errorMessage.INTERNAL_SERVER_ERROR);
            res.status(err.status || StatusCode_1.default.INTERNAL_SERVER_ERROR)
                .json(responseData);
            next(err);
        };
        (0, dotenv_1.config)();
        this.morganFormat =
            process.env.NODE_ENV === "production" ? "combined" : "dev";
        this.initialize();
    }
    static initalize(app) {
        return new ExpressLoader(app);
    }
    initialize() {
        this.setUpDefaultMiddleware();
        this.setUpMarganLogger();
        (0, routes_1.RegisterRoutes)(this.app);
        this.setUpErrorHandler();
        this.setUpSwagger();
    }
    setUpDefaultMiddleware() {
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
    }
    setUpSwagger() {
        this.app.use("/docs", swagger_ui_express_1.default.serve, (_req, res) => __awaiter(this, void 0, void 0, function* () {
            return res.send(swagger_ui_express_1.default.generateHTML(yield Promise.resolve().then(() => __importStar(require("../../build/swagger.json")))));
        }));
    }
    setUpMarganLogger() {
        this.app.use((0, morgan_1.default)(this.morganFormat, {
            skip: (_req, res) => res.statusCode < 400,
            stream: {
                write(message) {
                    Logger_2.default.info(message);
                },
            },
        }));
    }
    setUpErrorHandler() {
        this.app.use(this.notFoundHandler);
        this.app.use(this.validateErrorHandler);
        this.app.use(this.catchAllErrorHandler);
    }
}
exports.default = ExpressLoader;
//# sourceMappingURL=ExpressLoader.js.map
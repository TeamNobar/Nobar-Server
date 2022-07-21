"use strict";
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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../index");
describe("search", () => {
    // afterAll(() => DB.close());
    describe("given the search tags exist", () => {
        it("should return a 200 status", () => __awaiter(void 0, void 0, void 0, function* () {
            const { statusCode } = yield (0, supertest_1.default)(index_1.app)
                .get("/search/tag");
            expect(statusCode).toBe(200);
        }));
    });
    describe("given the keyword is sent", () => {
        it("should return a 200 status", () => __awaiter(void 0, void 0, void 0, function* () {
            const keyword = "레몬";
            const { statusCode } = yield (0, supertest_1.default)(index_1.app)
                .get(`/search/keyword?keyword=${keyword}`);
            expect(statusCode).toBe(200);
        }));
    });
    describe("given the base is sent", () => {
        it("should return a 200 status", () => __awaiter(void 0, void 0, void 0, function* () {
            const base = "위스키";
            const { statusCode } = yield (0, supertest_1.default)(index_1.app)
                .get(`/search/base?base=${base}`);
            expect(statusCode).toBe(200);
        }));
    });
    describe("given the search tags and autokeywords exist", () => {
        it("should return a 200 status", () => __awaiter(void 0, void 0, void 0, function* () {
            const { statusCode } = yield (0, supertest_1.default)(index_1.app)
                .get("/search/tag");
            expect(statusCode).toBe(200);
        }));
    });
});
//# sourceMappingURL=search.test.js.map
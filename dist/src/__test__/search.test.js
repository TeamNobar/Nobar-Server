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
const mongoose_1 = __importDefault(require("mongoose"));
const GuideDAO_1 = __importDefault(require("../model/guide/GuideDAO"));
// import { NobarErrorCode } from "../error/NobarErrorCode";
describe("search", () => {
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        console.log("서치 디스커넥션");
        yield mongoose_1.default.connection.close();
    }));
    describe("given the search tags exist", () => {
        it("should return a 200 status", () => __awaiter(void 0, void 0, void 0, function* () {
            const { statusCode } = yield (0, supertest_1.default)(index_1.app)
                .get("/search/tag");
            expect(statusCode).toBe(200);
        }));
    });
    describe("given the keyword is sent", () => {
        it("should return a 200 status", () => __awaiter(void 0, void 0, void 0, function* () {
            const keyword = encodeURI("레몬");
            const { statusCode } = yield (0, supertest_1.default)(index_1.app)
                .get(`/search/keyword?keyword=${keyword}`);
            expect(statusCode).toBe(200);
        }));
    });
    describe("given the base is sent", () => {
        it("should return a 200 status", () => __awaiter(void 0, void 0, void 0, function* () {
            const base = encodeURI("위스키");
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
    describe("given the guide does not exist", () => {
        it("should return a 400 status", () => __awaiter(void 0, void 0, void 0, function* () {
            const guideId = "잘못된 ID";
            const { statusCode } = yield (0, supertest_1.default)(index_1.app)
                .get(`/guide/${guideId}`);
            expect(statusCode).toBe(400);
        }));
    });
    describe("given the guide does exist", () => {
        it("should return a 200 status", () => __awaiter(void 0, void 0, void 0, function* () {
            const newGuide = new GuideDAO_1.default({
                title: "가이드제목수정",
                subtitle: "가이드서브타이틀",
                content: "가이드내용",
                images: [
                    "url1",
                    "url2"
                ],
                thumbnail: "썸네일url3"
            });
            yield newGuide.save();
            const newGuideId = newGuide._id;
            const { statusCode } = yield (0, supertest_1.default)(index_1.app)
                .get(`/guide/${newGuideId}`);
            expect(statusCode).toBe(200);
        }));
    });
});
//# sourceMappingURL=search.test.js.map
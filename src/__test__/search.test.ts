import supertest from "supertest";
import { app } from "../index";

describe("search", () => {

  // afterAll(() => DB.close());

  describe("given the search tags exist", () => {
    it("should return a 200 status", async () => {
      const { statusCode } = await supertest(app)
        .get("/search/tag");
      expect(statusCode).toBe(200);
    })
  });

  describe("given the keyword is sent", () => {
    it("should return a 200 status", async () => {

      const keyword = encodeURI("레몬");
      const { statusCode } = await supertest(app)
        .get(`/search/keyword?keyword=${keyword}`)
      expect(statusCode).toBe(200);    

    })
  })

  describe("given the base is sent", () => {
    it("should return a 200 status", async () => {

      const base = encodeURI("위스키");
      const { statusCode } = await supertest(app)
        .get(`/search/base?base=${base}`);
      expect(statusCode).toBe(200);    

    })
  })

  describe("given the search tags and autokeywords exist", () => {
    it("should return a 200 status", async () => {

      const { statusCode } = await supertest(app)
        .get("/search/tag");
      expect(statusCode).toBe(200);    

    })
  })
})
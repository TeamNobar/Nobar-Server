import supertest from "supertest";
import { app } from "../index";
import mongoose from "mongoose";
import GuideDAO from "../model/guide/GuideDAO";
// import { NobarErrorCode } from "../error/NobarErrorCode";

describe("search", () => {

  afterAll(async () => {
    await mongoose.connection.close();
  });

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

  
  describe("given the guide does not exist", () => {
    it("should return a 400 status", async () => {
      const guideId = "잘못된 ID"; 
      const { statusCode } = await supertest(app)
        .get(`/guide/${guideId}`);
      expect(statusCode).toBe(400);
    })
  });

  describe("given the guide does exist", () => {
    it("should return a 200 status", async () => {
            
      const newGuide = new GuideDAO({
        title: "가이드제목수정",
        subtitle: "가이드서브타이틀",
        content: "가이드내용",
        images: [
          "url1",
          "url2"
        ],
        thumbnail: "썸네일url3"
      })

      await newGuide.save();
      const newGuideId = newGuide._id as unknown as string; 

      const { statusCode } = await supertest(app)
        .get(`/guide/${newGuideId}`);
      expect(statusCode).toBe(200);    

    })
  })
})
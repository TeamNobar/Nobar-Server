// import { connectDB, dropDB, dropCollections } from "./setupdb";
// import express from "express";
// import mongoose from "mongoose";
import supertest from "supertest";
import GuideDAO from "../model/guide/GuideDAO";
import { app } from "../index"; 
import { NobarErrorCode } from "../error/NobarErrorCode"

// app 수정해라
// const app = express();
// app.use(express.json());

describe("guide", () => {

  // afterAll(() => DB.close());

  describe("given the guide does not exist", () => {
    it("should return a 400 status", async () => {
      const guideId = "62cd8b819f626834bbe7d6a9"; // 62cd8b819f626834bbe7d6a9
      const { statusCode } = await supertest(app)
        .get(`/guide/${guideId}`);
      expect(statusCode).toBe(NobarErrorCode.BAD_REQUEST);
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
import supertest from "supertest";
import RecipeDAO from "../model/recipe/RecipeDAO";
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

  describe("wrong search tags for ", () => {
    it("should return a 200 status", async () => {
            
      const newGuide = new RecipeDAO({
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

      console.log("newGuideUrl ", `/guide/${newGuideId}`);
      console.log("newguideId ", newGuideId);

      const { statusCode } = await supertest(app)
        .get(`/guide/${newGuideId}`);
      expect(statusCode).toBe(200);    

    })
  })
})
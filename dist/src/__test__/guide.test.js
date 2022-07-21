"use strict";
// import { MongoMemoryServer } from "mongodb-memory-server";
// import mongoose from "mongoose";
// import express from "express";
// const app = express();
// app.use(express.json());
// routes(app);
// yarn add supertest jest ts-jest @types/jest @types/supertest -D
describe("guide", () => {
    // beforeAll(async () => {
    //   const mongoServer = await MongoMemoryServer.create();
    //   await mongoose.connect(mongoServer.getUri());
    // })
    describe("given the product does not exist", () => {
        it("should return a 404", () => {
            expect(true).toBe(true);
        });
    });
});
//# sourceMappingURL=guide.test.js.map
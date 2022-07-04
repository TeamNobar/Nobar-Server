import express       from "express";
import ExpressLoader from "./ExpressLoader";
import MongoDbLoader from "./MongoDbLoader";

export default class ProjectLoader {
  public static async initalize(
    app: express.Application
  ) {
    ExpressLoader.initalize(app);
    await MongoDbLoader.connectMongoDB();
  }
}

import mongoose from "mongoose";
import config   from "../config";
import Logger   from "./Logger";

export default class {
  public static async connectMongoDB() {
    try {
      await mongoose.connect(config.mongoURI);
      mongoose.set("autoCreate", true);
      Logger.info("Mongoose Connected")
    } catch (error) {
      Logger.error(error);
      process.exit(1);
    }
  }
}

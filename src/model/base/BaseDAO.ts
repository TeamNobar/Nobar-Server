import mongoose from "mongoose";
import { Base } from "./Base";

const BaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }, 
  url: {
    type: String,
    reqired: true
  },
  recipes: [{
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Recipe",
  }]
});

export default mongoose.model<mongoose.Document & Base>("Base", BaseSchema);
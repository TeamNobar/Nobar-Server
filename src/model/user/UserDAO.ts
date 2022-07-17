import mongoose from "mongoose";
import User     from "./User";

const userSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: true
  },
  tastingNotes: [
    {
      type: mongoose.Schema.Types.ObjectId
    }
  ],
  laterRecipe: [
    {
      type: mongoose.Schema.Types.ObjectId
    }
  ],
  snsAuthToken: {
    type: String
  },
  deviceToken: {
    type: String
  }
})

export default mongoose.model<mongoose.Document & User>("User", userSchema);
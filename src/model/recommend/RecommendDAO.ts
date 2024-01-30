import mongoose  from "mongoose";
import { Recommend } from "./Recommend";

const recommendSchema = new mongoose.Schema({
  recipeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Recipe"
  }
})

export default mongoose.model<mongoose.Document & Recommend>("Recommend", recommendSchema);
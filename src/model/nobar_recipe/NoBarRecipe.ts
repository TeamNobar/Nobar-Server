import mongoose from "mongoose";

export default interface NoBarRecipe {
  title: string,
  recipe: mongoose.Schema.Types.ObjectId
}
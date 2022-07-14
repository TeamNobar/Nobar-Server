import mongoose from "mongoose";

export default interface TastingNote {
  rate: number,
  recipe: mongoose.Schema.Types.ObjectId
  tastingTag: mongoose.Schema.Types.ObjectId,
  tasteContent: string,
  experienceContent: string,
  createAt: number
}
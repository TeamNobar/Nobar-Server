import mongoose from "mongoose";

export default interface TastingNote {
  rate: number,
  recipe: mongoose.Schema.Types.ObjectId
  tastingTag: number[],
  tasteContent: string|null,
  experienceContent: string|null,
  createdAt:string
}
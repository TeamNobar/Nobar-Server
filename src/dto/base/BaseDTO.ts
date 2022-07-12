import mongoose from "mongoose";

export interface BaseDTO {
  id: mongoose.Schema.Types.ObjectId;
  name: string,
  url: string,
  recipes: string[]
} 
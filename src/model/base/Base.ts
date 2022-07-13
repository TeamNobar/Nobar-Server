import mongoose from "mongoose";

export interface Base {
  name: string;
  url: string;
  recipes: mongoose.Schema.Types.ObjectId[];
}

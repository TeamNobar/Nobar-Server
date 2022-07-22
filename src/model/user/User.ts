import mongoose from "mongoose";

export default interface User {
  nickname: string,
  tastingNotes: mongoose.Schema.Types.ObjectId[],
  laterRecipe: mongoose.Schema.Types.ObjectId[],
  snsAuthToken: string,
  deviceToken: string,
  token: string
}
import mongoose from "mongoose";

export interface SkillDTO {
  id: mongoose.Schema.Types.ObjectId;
  name: string,
  url: string
}
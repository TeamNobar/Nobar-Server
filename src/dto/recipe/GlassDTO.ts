import mongoose from "mongoose";

export interface GlassDTO {
  id: mongoose.Schema.Types.ObjectId;
  name: string,
  url: string
} 
import mongoose from "mongoose";

export interface GuideDTO {
  id: mongoose.Schema.Types.ObjectId;
  title: string,
  subtitle: string,
  content: string,
  images: string[],
  thumbnail: string
}
import mongoose from "mongoose";
import { Guide } from "./Guide";

const GuideSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  images: {
    type: [String],
    required: true
  }
});

export default mongoose.model<mongoose.Document & Guide>("Guide", GuideSchema);
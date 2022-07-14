import mongoose from "mongoose";
import Title    from "./Title";

const titleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  }
})

export default mongoose.model<mongoose.Document & Title>("Title", titleSchema);
import mongoose    from "mongoose";
import TastingNote from "./TastingNote";

const tastingNoteSchema = new mongoose.Schema({
  rate: {
    type: Number,
    required: true
  },
  recipe: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Recipe"
  },
  tastingTags: {
    type: [Number]
  },
  tasteContent: {
    type: String,
    default: ""
  },
  experienceContent: {
    type: String,
    default: ""
  },
  createdAt: {
    type: String,
    require: true
  }
});

export default mongoose.model<mongoose.Document & TastingNote>("TastingNote", tastingNoteSchema);
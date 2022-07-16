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
    defualt: ""
  },
  experienceContent: {
    type: String,
    default: ""
  }
}, {
  timestamps: {
    createdAt: "CreatedAt",
    currentTime: () => Math.floor(Date.now() / 1000)
  }
});

export default mongoose.model<mongoose.Document & TastingNote>("TastingNote", tastingNoteSchema);
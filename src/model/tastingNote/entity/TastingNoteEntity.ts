import mongoose    from "mongoose";
import TastingNote from "../TastingNote";

export default interface TastingNoteEntity extends TastingNote {
  _id: mongoose.Schema.Types.ObjectId;
}
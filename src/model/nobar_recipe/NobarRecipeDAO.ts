import mongoose    from "mongoose";
import NoBarRecipe from "./NoBarRecipe";

const nobarRecipeDAO = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  recipe: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

export default mongoose.model<mongoose.Document & NoBarRecipe>("NoBarRecipe", nobarRecipeDAO);
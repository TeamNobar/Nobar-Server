import { RecommendDTO } from "./RecommendDTO"
import { RecipeDTO } from "../recipe/RecipeDTO";
import { IngredientDTO } from "../ingredient/IngredientDTO";

export interface SearchViewWordsDTO {
  recommends: RecommendDTO[];
  recipes: RecipeDTO[];
  ingredients: IngredientDTO[];
}
import RecipeDAO           from "../model/recipe/RecipeDAO";
import RecipeDetailService from "./RecipeDetailService";

export default class ServiceInjector {
  public static get recipeDetail() {
    return new RecipeDetailService(
      RecipeDAO
    )
  }
};
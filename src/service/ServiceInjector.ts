import BaseDAO             from "../model/base/BaseDAO";
import IngredientDAO       from "../model/ingredient/IngredientDAO";
import RecipeDAO           from "../model/recipe/RecipeDAO";
import UserDAO             from "../model/user/UserDAO";
import AuthService         from "./AuthService";
import RecipeDetailService from "./RecipeDetailService";

export default class ServiceInjector {
  public static get recipeDetail() {
    return new RecipeDetailService(
      RecipeDAO,
      BaseDAO,
      IngredientDAO
    )
  }

  public static get auth() {
    return new AuthService(
      UserDAO
    )
  }
}
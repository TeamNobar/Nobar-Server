import BaseDAO             from "../model/base/BaseDAO";
import IngredientDAO       from "../model/ingredient/IngredientDAO";
import RecipeDAO           from "../model/recipe/RecipeDAO";
import TastingNoteDAO      from "../model/tastingNote/TastingNoteDAO";
import UserDAO             from "../model/user/UserDAO";
import AuthService         from "./AuthService";
import RecipeDetailService from "./RecipeDetailService";
import TastingNoteService  from "./TastingNoteService";

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

  public static get tastingNote() {
    return new TastingNoteService(
      TastingNoteDAO,
      UserDAO
    )
  }
}
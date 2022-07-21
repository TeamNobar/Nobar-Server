import BaseDAO            from "../model/base/BaseDAO";
import IngredientDAO      from "../model/ingredient/IngredientDAO";
import recipeDAO          from "../model/recipe/RecipeDAO";
import RecipeDAO          from "../model/recipe/RecipeDAO";
import TastingNoteDAO     from "../model/tastingNote/TastingNoteDAO";
import userDAO            from "../model/user/UserDAO";
import UserDAO            from "../model/user/UserDAO";
import AuthService        from "./AuthService";
import RecipeService      from "./RecipeService";
import TastingNoteService from "./TastingNoteService";

export default class ServiceInjector {
  public static get recipe() {
    return new RecipeService(
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
      userDAO,
      TastingNoteDAO,
      recipeDAO,
      BaseDAO,
      IngredientDAO
    )
  }
}
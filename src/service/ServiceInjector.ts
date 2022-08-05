import BaseDAO            from "../model/base/BaseDAO";
import IngredientDAO      from "../model/ingredient/IngredientDAO";
import recipeDAO          from "../model/recipe/RecipeDAO";
import RecipeDAO          from "../model/recipe/RecipeDAO";
import TastingNoteDAO     from "../model/tastingNote/TastingNoteDAO";
import userDAO            from "../model/user/UserDAO";
import UserDAO            from "../model/user/UserDAO";
import GuideDAO           from "../model/guide/GuideDAO";
import RecommendDAO       from "../model/recommend/RecommendDAO";
import AuthService        from "./AuthService";
import { GuideService }   from "./GuideService";
import { SearchService }  from "./SearchService";
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

  public static get guide() {
    return new GuideService(
      GuideDAO,
    )
  }

  public static get search() {
    return new SearchService(
      BaseDAO,
      RecipeDAO,
      RecommendDAO,
      IngredientDAO,
    )
  }
  
}
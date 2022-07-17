import { Controller, Get, Path, Route } from "tsoa";
import RecipeDetailService              from "../service/RecipeDetailService";
import ServiceInjector                  from "../service/ServiceInjector";

@Route("recipe")
export class RecipeDetailController extends Controller {
  private readonly recipeDetailService: RecipeDetailService = ServiceInjector.recipeDetail

  @Get("{recipeId}")
  public async getRecipeDetail(
    @Path() recipeId: string
  ) {

  }
}
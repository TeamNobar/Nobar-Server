import { Controller, Get, Path, Route } from "tsoa";
import RecipeService                    from "../service/RecipeService";
import ServiceInjector                  from "../service/ServiceInjector";

@Route("recipe")
export class RecipeDetailController extends Controller {
  private readonly recipeDetailService: RecipeService = ServiceInjector.recipe

  @Get("{recipeId}")
  public async getRecipeDetail(
    @Path() recipeId: string
  ) {
    return await this.recipeDetailService.getRecipeDetail(recipeId);
  }
}
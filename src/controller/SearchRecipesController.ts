import {
  Controller,
  Query,
  Route,
  Get,
} from "tsoa";
import { SearchRecipesService } from "../service/SearchRecipesService";
import StatusCode from "../utils/StatusCode";
import { errorMessage } from "../utils/errorMessage";

@Route("/search")
export class SearchRecipesController extends Controller {
  @Get("")
  public async findRecipesByBase(
    @Query() base: string
  ) {
    const recipes = await new SearchRecipesService().findRecipesByBase(base);

    if (recipes === null) {
      this.setStatus(StatusCode.BAD_REQUEST);

      const notFoundRecipes = {
        status: StatusCode.BAD_REQUEST,
        messsage : errorMessage.BAD_REQUEST
      };
    
      return notFoundRecipes;
  
    }

    this.setStatus(StatusCode.OK);
    return recipes;
  }
} 

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
    const data = await new SearchRecipesService().findRecipesByBase(base);

    if (data === null) {
      this.setStatus(400);

      const notFoundRecipes = {
        status: StatusCode.BAD_REQUEST,
        messsage : errorMessage.BAD_REQUEST
      };
    
      return notFoundRecipes;
  
    }

    return data;
  }
} 

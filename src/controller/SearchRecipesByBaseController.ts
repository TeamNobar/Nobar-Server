import {
  Controller,
  Query,
  Route,
  Get,
} from "tsoa";
import { SearchRecipesByBaseService } from "../service/SearchRecipesByBaseService";
import StatusCode from "../utils/StatusCode";

@Route("search")
export class SearchRecipesByBaseController extends Controller {

  @Get("base")
  public async findRecipesByBase(
    @Query() base?: string
  ) {

    if (!base) { 
      this.setStatus(StatusCode.OK);
      return {
        recipes: []
      };
    }
      
    const recipes = await new SearchRecipesByBaseService().findRecipesByBase(base);

    // if (recipes === null) {
    //   this.setStatus(StatusCode.BAD_REQUEST);

    //   const notFoundRecipes = {
    //     status: StatusCode.BAD_REQUEST,
    //     messsage : errorMessage.BAD_REQUEST
    //   };
      
    //   return notFoundRecipes;
    
    // }

    return recipes;
  }
} 

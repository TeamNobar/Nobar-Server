import {
  Route,
  Get,
  Controller,
  Security,
  Query
} from "tsoa";
import StatusCode from "../utils/StatusCode";
import { errorMessage } from "../utils/errorMessage";
import ServiceInjector from "../service/ServiceInjector"

@Route("search")
export class SearchController extends Controller {

  private readonly searchService = ServiceInjector.search;
  
  @Get("tag") 
  @Security("jwt", ["admin"])
  public async getSearchTags() {
    return await this.searchService.getSearchTags();
  }

  @Get("")
  @Security("jwt", ["admin"])
  public async getSearchKeywords() {

    const keywords = await this.searchService.getSearchKeywords();

    if (keywords === null){

      this.setStatus(StatusCode.BAD_REQUEST);
    
      const notFoundKeywords = {
        status: StatusCode.BAD_REQUEST,
        messsage : errorMessage.BAD_REQUEST
      };

      return notFoundKeywords;
    }

    this.setStatus(StatusCode.OK);
    return keywords;
  }


  @Get("base")
  @Security("jwt", ["admin"])
  public async findRecipesByBase(
    @Query() base?: string
  ) {

    if (!base) { 
      this.setStatus(StatusCode.OK);
      return {
        recipes: []
      };
    }
      
    const recipes = await this.searchService.findRecipesByBase(base);

    return recipes;
  }


  @Get("keyword")
  @Security("jwt", ["admin"])
  public async searchRecipesByKeyword (
    @Query() keyword?: string
  ) {

    if (!keyword) { 
      this.setStatus(StatusCode.OK);
      return {
        recipes: []
      };
    }

    const foundRecipes = await this.searchService.searchRecipesByKeyword(keyword);

    this.setStatus(StatusCode.OK);
    return foundRecipes;
  }


}
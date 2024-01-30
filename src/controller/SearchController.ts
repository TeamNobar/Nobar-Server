import {
  Route,
  Get,
  Controller,
  Security,
  Query
} from "tsoa";
import StatusCode from "../utils/StatusCode";
import ServiceInjector from "../service/ServiceInjector"

@Route("search")
export class SearchController extends Controller {

  private readonly searchService = ServiceInjector.search;
  
  @Get("tag") 
  @Security("jwt", ["admin"])
  public async getSearchTags() {

    const searchTags = await this.searchService.getSearchTags();
    return {
      base: searchTags
    };
    
  }

  @Get("")
  @Security("jwt", ["admin"])
  public async getSearchViewWords() {

    const SearchViewWords = await this.searchService.getSearchViewWords();

    this.setStatus(StatusCode.OK);
    return SearchViewWords;
  }


  @Get("base")
  @Security("jwt", ["admin"])
  public async findRecipesByBase (
    @Query() base?: string
  ) {

    if (!base) { 
      this.setStatus(StatusCode.OK);
      return {
        recipes: []
      };
    }
      
    const foundRecipes = await this.searchService.findRecipesByBase(base);

    this.setStatus(StatusCode.OK);
    return {
      recipes: foundRecipes
    };
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
    return {
      recipes: foundRecipes
    };
  }


}
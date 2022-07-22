import { Controller, Get, Request, Route, Security } from "tsoa";
import { JwtPayloadDTO }                             from "../dto/auth/JwtPayloadDTO";
import { GuideDTO }                                  from "../dto/guide/GuideDTO";
import HomeDTO                                       from "../dto/home/HomeDTO";
import { RecipeDTO }                                 from "../dto/recipe/RecipeDTO";
import UserDTO                                       from "../dto/user/UserDTO";
import { GuideService }                              from "../service/GuideService";
import ServiceInjector                               from "../service/ServiceInjector";
import StatusCode                                    from "../utils/StatusCode";

@Route("home")
export class HomeController extends Controller {
  public readonly authService = ServiceInjector.auth;
  public readonly recipeService = ServiceInjector.recipe;
  public readonly guideService = new GuideService();

  @Get("")
  @Security("jwt", ["admin"])
  public async getHome(
    @Request() request: any
  ) {
    const token: JwtPayloadDTO = await Promise.resolve(request.user);
    const userId: string = token.user.id
    const user: UserDTO = await this.authService.findUser(userId);
    const laterRecipes: RecipeDTO[] = await this.recipeService.getRecipes(user.laterRecipes);
    const guides: GuideDTO[] = await this.guideService.findAllGuide();
    this.setStatus(StatusCode.OK);
    return <HomeDTO> {
      laterRecipeList: laterRecipes,
      guideList: guides,
      nickname: user.nickname
    }
  }
}
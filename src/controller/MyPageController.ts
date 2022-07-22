import { Controller, Get, Request, Route, Security } from "tsoa";
import { JwtPayloadDTO }                             from "../dto/auth/JwtPayloadDTO";
import MyPageDTO                                     from "../dto/mypage/MyPageDTO";
import { RecipeDTO }                                 from "../dto/recipe/RecipeDTO";
import TastingNoteDTO                                from "../dto/tastingnote/TastingNoteDTO";
import UserDTO                                       from "../dto/user/UserDTO";
import { debugLogger }                               from "../loaders/debugLogger";
import ServiceInjector                               from "../service/ServiceInjector";
import StatusCode                                    from "../utils/StatusCode";

@Route("mypage")
export class MyPageController extends Controller {
  private readonly authService = ServiceInjector.auth;
  private readonly recipeService = ServiceInjector.recipe;
  private readonly tastingNoteService = ServiceInjector.tastingNote;

  @Get("")
  @Security("jwt", ["admin"])
  public async getMypage(
    @Request() request: any
  ) {
    const token: JwtPayloadDTO = await Promise.resolve(request.user);
    const userId: string = token.user.id
    debugLogger(userId);
    const user: UserDTO = await this.authService.findUser(userId);
    const laterRecipes: RecipeDTO[] = await this.recipeService.getRecipes(user.laterRecipes);
    const tastingNotes: TastingNoteDTO[] = await this.tastingNoteService.getTastingNotes(user.tastingNotes);
    this.setStatus(StatusCode.OK);
    return <MyPageDTO>{
      nickname: user.nickname,
      laterRecipes: laterRecipes,
      tastingNotes: tastingNotes
    }
  }
}
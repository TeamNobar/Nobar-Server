import { Controller, Get, Request, Route, Security } from "tsoa";
import { JwtPayloadDTO }                             from "../dto/auth/JwtPayloadDTO";
import StatusCode                                    from "../utils/StatusCode";

@Route("mypage")
export class MyPageController extends Controller {
  @Get("")
  @Security("jwt", ["admin"])
  public async getMypage(
    @Request() request: any
  ) {
    this.setStatus(StatusCode.OK);
    const user:JwtPayloadDTO = await Promise.resolve(request.user);
    return user.user.id
  }
}
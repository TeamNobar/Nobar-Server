import { Body, Controller, Post, Route } from "tsoa";
import getToken                          from "../auth/jwtHandler";
import CreateUserParam                   from "../dto/user/CreateUserParam";
import ServiceInjector                   from "../service/ServiceInjector";

@Route("auth")
export class AuthController extends Controller {
  private readonly authService = ServiceInjector.auth

  @Post("")
  public async createUser(
    @Body() requestBody: CreateUserParam
  ) {
    const token: string = await this.authService.authUser(requestBody);
    return {
      accesstoken: token
    }
  }
}
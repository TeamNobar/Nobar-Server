import { Body, Controller, Post, Route } from "tsoa";
import CreateUserParam                   from "../dto/user/CreateUserParam";
import ServiceInjector                   from "../service/ServiceInjector";

@Route("auth")
export class AuthController extends Controller {
  private readonly authService = ServiceInjector.auth

  @Post("")
  public async createUser(
    @Body() requestBody: CreateUserParam
  ) {
    return await this.authService.authUser(requestBody);
  }
}
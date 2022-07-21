import { Body, Controller, Post, Route } from "tsoa";
import CreateUserParam                   from "../dto/user/CreateUserParam";

@Route("auth")
export class AuthController extends Controller {
  @Post("")
  public async createUser(
    @Body() requestBody: CreateUserParam
  ) {

  }
}
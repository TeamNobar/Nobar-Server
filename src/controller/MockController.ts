import { Controller, Get, Route } from "tsoa";

@Route("mock")
export class MockController extends Controller {
  @Get()
  public async getMock(): Promise<string> {
    this.setStatus(200);
    return "mock";
  }
}
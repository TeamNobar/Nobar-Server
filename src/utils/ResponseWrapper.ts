import ResponseWrapDTO from "../dto/common/ResponseWrapDTO";

export default class ResponseWrapper {
  static successOf<T>(status: number, messgae: string, data?: T): ResponseWrapDTO<T> {
    return {
      status: status,
      message: messgae,
      data: data
    }
  }

  static failureOf<T>(status: number, messgae: string | object, data?: T): ResponseWrapDTO<T> {
    return {
      status: status,
      message: messgae,
      data: data
    }
  }
}
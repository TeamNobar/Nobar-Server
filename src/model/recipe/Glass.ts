import { EnumType } from "ts-jenum";

export class Glass extends EnumType<Glass>() {
  private constructor(
    readonly id:number,
    readonly name: string,
    readonly url: string
  ) {
    super();
  }
}
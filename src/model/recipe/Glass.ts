import { Enum, EnumType } from "ts-jenum";

@Enum("id")
export class Glass extends EnumType<Glass>() {
  private constructor(
    readonly id:number,
    readonly name: string,
    readonly url: string
  ) {
    super();
  }
}
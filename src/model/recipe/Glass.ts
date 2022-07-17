import { Enum, EnumType } from "ts-jenum";

@Enum("id")
export class Glass extends EnumType<Glass>() {
  //  칵테일, 하이볼, 온더락, 샴페인, 리큐어, 마가리따, 필스너, 소서샴페인
  //
  static readonly NotFound = new Glass(0, "", "");
  static readonly A = new Glass(1, "", "");
  static readonly A = new Glass(2, "", "");
  static readonly A = new Glass(3, "", "");
  static readonly A = new Glass(4, "", "");
  static readonly A = new Glass(5, "", "");
  static readonly A = new Glass(6, "", "");
  static readonly A = new Glass(7, "", "");
  static readonly A = new Glass(8, "", "");

  private constructor(
    readonly id: number,
    readonly name: string,
    readonly url: string
  ) {
    super();
  }

  private hasGlassName(name: string): boolean {
    return this.name === name;
  }

  public static findGlassById(id: number): Glass {
    const glass = this.find(id);
    if (!glass) {
      return Glass.NotFound;
    }
    return glass;
  }


}
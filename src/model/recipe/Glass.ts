import { Enum, EnumType } from "ts-jenum";

@Enum("id")
export class Glass extends EnumType<Glass>() {
  static readonly NotFound = new Glass(0, "", "");
  static readonly Cocktail = new Glass(1, "칵테일", "");
  static readonly Highball = new Glass(2, "하이볼", "");
  static readonly OnTheRock = new Glass(3, "온더락", "");
  static readonly Champagne = new Glass(4, "샴페인", "");
  static readonly Liqueur = new Glass(5, "리큐어", "");
  static readonly Margarita = new Glass(6, "마가리따", "");
  static readonly Pilsner = new Glass(7, "필스너", "");
  static readonly SaucerChampagne = new Glass(8, "소서샴페인", "");

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

  public static findGlassByName(name: string): Glass {
    const glass = this.values().find(
      (glass) => glass.hasGlassName(name)
    );
    if (!glass) {
      return Glass.NotFound;
    }
    return glass;
  }

}
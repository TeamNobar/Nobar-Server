import { Enum, EnumType } from "ts-jenum";

@Enum("id")
export class Glass extends EnumType<Glass>() {
  static readonly NotFound = new Glass(0, "", "");
  static readonly Cocktail = new Glass(1, "칵테일", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/_icn_glass_cocktail.png");
  static readonly Highball = new Glass(2, "하이볼", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/_icn_glass_highball.png");
  static readonly OnTheRock = new Glass(3, "온더락", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/_icn_glass_ontherock.png");
  static readonly Champagne = new Glass(4, "샴페인", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/_icn_glass_champagne.png");
  static readonly Liqueur = new Glass(5, "리큐어", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_glass_liquor.png");
  static readonly Margarita = new Glass(6, "마가리따", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/_icn_glass_margarita.png");
  static readonly Pilsner = new Glass(7, "필스너", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_glass_pilsner.png");
  static readonly SaucerChampagne = new Glass(8, "소서샴페인", "https://nobar-bucket.s3.ap-northeast-2.amazonaws.com/icn_glass_saucerchampagne.png");

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
import { Enum, EnumType } from "ts-jenum";

@Enum("id")
export class Skill extends EnumType<Skill>() {
  static readonly NotFound = new Skill(0, "", "");
  static readonly Shake = new Skill(1, "쉐이크", "");
  static readonly Blend = new Skill(2, "블렌드", "");
  static readonly Build = new Skill(3, "빌드", "");

  private constructor(
    readonly id: number,
    readonly name: string,
    readonly url: string
  ) {
    super();
  }

  public hasSkillId(id: number) {
    return this.id === id;
  }

  public hasSkillName(name: string) {
    return this.name === name;
  }

  static findSkillById(id: number): Skill {
    const skill = this.values().find(skill => {
      skill.hasSkillId(id);
    });
    if (typeof skill === "undefined") {
      return Skill.NotFound
    }
    return skill
  }

  static findSkillByName(name: string): Skill {
    const skill = this.values().find(skill => {
      skill.hasSkillName(name);
    })
    if (typeof skill === "undefined") {
      return Skill.NotFound
    }
    return skill
  }
}
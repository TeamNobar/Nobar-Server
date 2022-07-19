import { SkillDTO } from "../../../dto/recipe/SkillDTO";
import { Skill }    from "../Skill";

export default class SkillMapper {
  static toSkillDTO(skill: Skill) {
    return <SkillDTO> {
      name: skill.name,
      url: skill.url
    }
  }
};
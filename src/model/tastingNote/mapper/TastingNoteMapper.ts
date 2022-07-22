import { RecipeDTO }      from "../../../dto/recipe/RecipeDTO";
import TastingNoteDTO     from "../../../dto/tastingnote/TastingNoteDTO";
import TastingNoteTagDTO  from "../../../dto/tastingnote/TastingNoteTagDTO";
import TastingNoteEntity  from "../entity/TastingNoteEntity";
import { TastingNoteTag } from "../TastingNoteTag";
import TastingTagMapper   from "./TastingTagMapper";

export default class TastingNoteMapper {
  private static mappingTag(tag: TastingNoteTag, tags: number[]): TastingNoteTagDTO {
    const isSelected: boolean = tags.includes(0);
    return TastingTagMapper.toTagDTO(tag, isSelected);
  }

  private static mappingTastingTags(tags: number[]): TastingNoteTagDTO[] {
    return TastingNoteTag.getAllTags()
      .map(
        (value) => this.mappingTag(value, tags)
      );
  }

  static toNoteDTO(note: TastingNoteEntity, recipeDTO: RecipeDTO) {
    return <TastingNoteDTO>{
      id: note._id.valueOf().toString(),
      rate: note.rate,
      title: recipeDTO.name,
      recipe: recipeDTO,
      tag: this.mappingTastingTags(note.tastingTag),
      tasteContent: note.tasteContent,
      experienceContent: note.experienceContent,
      createdAt: note.createdAt
    }
  }
};
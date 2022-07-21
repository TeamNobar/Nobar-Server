import { RecipeDTO }      from "../../../dto/recipe/RecipeDTO";
import TastingNoteDTO     from "../../../dto/tastingnote/TastingNoteDTO";
import TastingNoteTagDTO  from "../../../dto/tastingnote/TastingNoteTagDTO";
import TastingNoteEntity  from "../entity/TastingNoteEntity";
import { TastingNoteTag } from "../TastingNoteTag";
import TastingTagMapper   from "./TastingTagMapper";

export default class TastingNoteMapper {
  static toNoteDTO(note: TastingNoteEntity, recipeDTO: RecipeDTO) {
    return <TastingNoteDTO> {
      id: note._id.valueOf().toString(),
      rate: note.rate,
      title: recipeDTO.name,
      recipe: recipeDTO,
      tag: this.mappingTastingTag(note.tastingTag),
      tasteContent: note.tasteContent,
      experienceContent: note.experienceContent,
      createdAt: note.createdAt
    }
  }

  private static mappingTastingTag(tags: number[]): TastingNoteTagDTO[] {
    return TastingNoteTag.getAllTags()
      .map(
        (value) => TastingTagMapper.toTagDTO(value, tags.includes(value.id))
      );
  }
};
import { RecipeDTO }  from "../recipe/RecipeDTO";
import TastingNoteDTO from "../tastingnote/TastingNoteDTO";

export default interface MyPageDTO {
  nickname: string,
  laterRecipes: RecipeDTO[],
  tastingNotes: TastingNoteDTO[]
}
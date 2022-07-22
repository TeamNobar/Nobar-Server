import { GuideDTO }  from "../guide/GuideDTO";
import { RecipeDTO } from "../recipe/RecipeDTO";

export default interface HomeDTO {
  laterRecipeList: RecipeDTO[],
  guideList: GuideDTO[],
  nickname: string;
}
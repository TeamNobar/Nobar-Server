import IngredientEntity from "../../ingredient/IngredientEntity";

export default interface RecipeIngredientEmbed {
  ingredient: IngredientEntity,
  quantity: number,
  unit: string
}
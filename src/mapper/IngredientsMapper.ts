import { IngredientDetailDTO } from "../dto/ingredient/IngredientDetailDTO"
import { IngredientDTO } from "../dto/ingredient/IngredientDTO"
import mongoose from "mongoose";
import { Ingredient } from "../model/ingredient/Ingredient";

interface IngredientsForMapper extends Ingredient {
  _id: mongoose.Schema.Types.ObjectId;
}

interface IngredientsDetailForMapper {
  ingredient: IngredientsForMapper,
  quantity: number;
  unit: string;
}

export class IngredientsMapper {
  // RecipeDAO에서 찾은 Ingredients
  public static toIngredientDetailDTO(ingredients: IngredientsDetailForMapper[]): IngredientDetailDTO[] {

    const ingredientsDetailData = ingredients.map((ingredient: IngredientsDetailForMapper) => {

      let quantityData = ingredient.unit; 
      if (ingredient.quantity !== 0) {
        quantityData = ingredient.quantity + quantityData; 
      }

      const ingredientDetailData = {
        id: ingredient.ingredient._id as unknown as string,
        name: ingredient.ingredient.name,
        enName: ingredient.ingredient.enName,
        proof: ingredient.ingredient.proof,
        category: ingredient.ingredient.category,
        quantity: quantityData 
      }

      return ingredientDetailData; 
    });

    return ingredientsDetailData;
  }

  public static toIngredientDTO(ingredients: IngredientsForMapper[]): IngredientDTO[] {

    // IngredientDAO에서 찾은 Ingredients
    const ingredientsData = ingredients.map((ingredient: IngredientsForMapper) => (
      {
        id: ingredient._id as unknown as string,
        name: ingredient.name,
        enName: ingredient.enName,
        proof: ingredient.proof,
        category: ingredient.category,
      }
    ));

    return ingredientsData;
  }

}

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

export class IngredientMapper {
  // RecipeDAO에서 찾은 Ingredients
  public static toIngredientDetailDTO(ingredients: IngredientsDetailForMapper[]): IngredientDetailDTO[] {

    const ingredientsDetailData = ingredients.map((elem: IngredientsDetailForMapper) => {

      let quantityData = elem.unit; 
      if (elem.quantity !== 0) {
        quantityData = elem.quantity + quantityData; 
      }

      const rst = {
        id: elem.ingredient._id as unknown as string,
        name: elem.ingredient.name,
        enName: elem.ingredient.enName,
        proof: elem.ingredient.proof,
        category: elem.ingredient.category,
        quantity: quantityData 
      }

      return rst; 
    });

    return ingredientsDetailData;
  }

  public static toIngredientDTO(ingredients: IngredientsForMapper[]): IngredientDTO[] {

    // IngredientDAO에서 찾은 Ingredients
    const ingredientsData = ingredients.map((elem: IngredientsForMapper) => (
      {
        id: elem._id as unknown as string,
        name: elem.name,
        enName: elem.enName,
        proof: elem.proof,
        category: elem.category,
      }
    ));

    return ingredientsData;
  }

}

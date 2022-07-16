export class IngredientMapper {
  public static toIngredientDTO(ingredients: any) {

    const ingredientData = ingredients.map((elem: any) => (
      {
        id: elem.ingredient._id,
        name: elem.ingredient.name,
        enName: elem.ingredient.enName,
        proof: elem.ingredient.proof,
        category: elem.ingredient.category,
        quantity: elem.quantity + elem.unit
      }
    ));

    return ingredientData;
  }
}
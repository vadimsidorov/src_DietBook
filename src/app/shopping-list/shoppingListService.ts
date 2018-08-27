import { Ingredient } from "../shared/ingredient.model";

export class shoppingListService{
    ingredients:Ingredient[] = [
        new Ingredient('apple',10),
        new Ingredient('tomatoes',5)
      ];
}
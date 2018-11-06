import { Recipe } from "./recipe-list/recipe-item/recipe.model";
import{ EventEmitter, Injectable } from "@angular/core"
import { Ingredient } from "../shared/ingredient.model";
import { shoppingListService } from "../shopping-list/shoppingListService";

@Injectable()
//@Ingectable for able to inject one service to another
export class RecipeService{
    public recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'GRILLED STAFF', 
            'Cooked dish on white plate',
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=67fb2e7b1fbe39b18b51146234ef38aa&auto=format&fit=crop&w=1950&q=80',
            [new Ingredient('Banana', 10),
             new Ingredient('Eggs', 5)
            ]),
        new Recipe(
            'GRILLED FISH', 
            'Grilled fish, cooked vegetables', 
            'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5975de9b79eb7aedb931f2cfc414e8c6&auto=format&fit=crop&w=1950&q=80',
            [new Ingredient('salmon', 1),
             new Ingredient('vegetables', 2)
            ]),
        new Recipe(
            'STEAL TO GO', 
            'Diffrent sort of meat', 
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=67fb2e7b1fbe39b18b51146234ef38aa&auto=format&fit=crop&w=1950&q=80',
            [new Ingredient('eggs', 12),
             new Ingredient('Almond Milk', 0.25)
            ])
    
        
      ];
      constructor(private slService: shoppingListService){}

    getRecipe(){
        return this.recipes.slice();
    }
   addIngredientsToSHoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients)
        
    } 
}
import { Recipe } from "./recipe-list/recipe-item/recipe.model";
import{ EventEmitter } from "@angular/core"

export class RecipeService{
    public recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('test', 'test description', 'https://wp-test.sencha.com/wp-content/uploads/2016/02/icon-sencha-test-studio-1.png' ),
        new Recipe('test2', 'test description2', 'https://wp-test.sencha.com/wp-content/uploads/2016/02/icon-sencha-test-studio-1.png' )
      ];
    getRecipe(){
        return this.recipes.slice();
    }
}
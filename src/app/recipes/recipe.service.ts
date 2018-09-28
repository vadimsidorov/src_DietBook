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
            'Banana pancakes', 
            'Gluten-free banana pancakes you can whip up in just 10 minutes! Scatter with pecans and raspberries to enjoy a low-calorie yet indulgent breakfast',
            'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/banana-pancakes.jpg?itok=OIckISk5',
            [new Ingredient('Banana', 10),
             new Ingredient('Eggs', 5)
            ]),
        new Recipe(
            'test2', 
            'test description2', 
            'https://wp-test.sencha.com/wp-content/uploads/2016/02/icon-sencha-test-studio-1.png',
            [new Ingredient('test', 1),
             new Ingredient('test2', 2)
            ]),
        new Recipe(
            'CRUSTLESS QUICHE TO GO', 
            'Bursting with flavor thanks to a bit of bacon, sweet potato, and chives these crustless quiches are also filled with greens. The recipe calls for Swiss chard, but spinach or arugula are a nice fit, too.', 
            'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.realsimple.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fportrait_435x518%2Fpublic%2Feat-what-you-love-crustless-quiche.jpg%3Fitok%3Dp4LgRPQ1%261536338150&w=2400&q=70',
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
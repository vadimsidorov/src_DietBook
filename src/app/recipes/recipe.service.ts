import { Recipe } from "./recipe-list/recipe-item/recipe.model";
import{ EventEmitter, Injectable } from "@angular/core"
import { Ingredient } from "../shared/ingredient.model";
import { shoppingListService } from "../shopping-list/shoppingListService";
import { TouchSequence } from "selenium-webdriver";

@Injectable()
//@Ingectable for able to inject one service to another
export class RecipeService{
    grid:boolean = false;
    public recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'GRILLED STEAK ', 
            'Good dinne plate',
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
            'PURE STEAK', 
            'Diffrent sort of meat', 
            'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bfc6912c941b78184f17b3708f510403&auto=format&fit=crop&w=1950&q=80',
            [new Ingredient('Steak', 12),
             new Ingredient('Asparagus', 25)
            ]),
        new Recipe(
            'BURGER', 
            'Cheat Meal can be healthy', 
            'https://images.unsplash.com/photo-1512427691650-15fcce1dc7b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9385b78d6bbaf37cb18a6fea90b804e2&auto=format&fit=crop&w=1951&q=80',
            [new Ingredient('Eggs', 12),
             new Ingredient('Bread', 0.25),
             new Ingredient('Onions', 0.25)
            ]),
        new Recipe(
            'EGGS', 
            'Good morning sunshine', 
            'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4fa061122a5ce899fcb5454dae8dbe99&auto=format&fit=crop&w=1950&q=80',
            [new Ingredient('Eggs', 12),
             new Ingredient('Sweet Patato', 0.75)
            ]),
        new Recipe(
            'GRILLED MEAT', 
            'Nothing better then steak', 
            'https://images.unsplash.com/photo-1532597311687-5c2dc87fff52?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5f766ceea9ba1bd2750910e70a94f91e&auto=format&fit=crop&w=1950&q=80',
            [new Ingredient('Steak', 12),
             new Ingredient('Garlic', 5)
            ])
    
        
      ];
      constructor(private slService: shoppingListService){}

    getRecipe(){
        return this.recipes.slice();
    }
   addIngredientsToSHoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients)
        
    } 
    listView(){
        this.grid = true;
        console.log('listView')
    }
    gridView(){
        this.grid = false;
        console.log('gridView')
    }

}
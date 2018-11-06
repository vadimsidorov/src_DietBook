import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";


export class shoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    // 1. Create new Subject for recognizing which Ingredient we picked
    ingredients: Ingredient[] = [
        new Ingredient('apple',10),
        new Ingredient('tomatoes',5)
      ];
      
      getIngredient(index:number){
          return this.ingredients[index];
      }
      //return on of Ingredients, in case we have changing index, we can pass it to this function as argument and get 
      //right Ingredient
      updateIngredient(index: number, newIngredient: Ingredient){
          this.ingredients[index] = newIngredient;
          this.ingredientsChanged.next(this.ingredients.slice())
      //Making a copy of existing ingredients
    }
    addUpdateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index].amount = this.ingredients[index].amount + newIngredient.amount;
        this.ingredientsChanged.next(this.ingredients.slice())
    }
    // если ингредиент уже есть и пользователь добавляет его опять, то количество ингредиента увеличивается
    addIngredients(ingredients: Ingredient[]){
        this.ingredients.slice()
        this.ingredients.push(...ingredients)
    }
    checkIfItemInCart(){
        
    }
}
      
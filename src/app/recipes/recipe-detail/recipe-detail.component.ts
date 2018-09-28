import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe-list/recipe-item/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe:Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {

  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToSHoppingList(this.recipe.ingredients)
    console.log('U just click add to SL')
  }
  //Эта функция вызывается при клике на кнопку Add To the Shopping List

}

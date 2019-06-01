import { Component, OnInit } from '@angular/core';

import { RecipeService } from './recipe.service';
import { Recipe } from './recipe-list/recipe-item/recipe.model';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }
  grid = false;

  listView(){
    this.recipeService.listView();
    this.grid = this.recipeService.grid;
  }
  gridView(){
    this.recipeService.gridView();
    this.grid = this.recipeService.grid;

  }
  
  
  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe)=>{this.selectedRecipe = recipe}
      );
  }

}

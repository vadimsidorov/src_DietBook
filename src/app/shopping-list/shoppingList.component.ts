import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { shoppingListService } from './shoppingListService';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shoppingList.component.html',
  styleUrls: ['./shoppingList.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[];

  constructor(private shoppingListService: shoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.ingredients;
  }

}

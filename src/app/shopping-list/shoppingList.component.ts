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
  onEditItem(index:number){
    this.shoppingListService.startedEditing.next(index);
  }
  // 2. .next passing index of Ingreditent Array (like observable passing some data)
  // другими словами все это для того, чтобы передать индекс элемента в shopping-edit.component, crosscomponent communication
  
}

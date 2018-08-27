import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { shoppingListService } from '../shoppingListService';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor(private shoppingListService: shoppingListService) { }

  ngOnInit() {
    

  }
  addOnItem(){
    const newIngName = this.nameInputRef.nativeElement.value;
    const newIngAmount = this.amountInputRef.nativeElement.value;
    const newIng = new Ingredient (newIngName, newIngAmount);
    this.shoppingListService.ingredients.push(newIng)
    
    
  }
}

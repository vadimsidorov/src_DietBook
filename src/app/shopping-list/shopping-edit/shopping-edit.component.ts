import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { shoppingListService } from '../shoppingListService';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  // We using ViewChild as local reference (#f in .html file)
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: shoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index:number) => {
          this.editMode = true;
          this.editItemIndex = index;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this. editedItem.amount
          })
        }
      );

  }
  //3.new Subject was created, data(index of Ingredients massive) passing through, so we can subscribe to it
  addOnItem(form: NgForm){
    const value = form.value;
    const newIng = new Ingredient (value.name, value.amount);
    let length = this.shoppingListService.ingredients.length;
    let i = 0;
    if (this.editMode){
      this.shoppingListService.updateIngredient(this.editItemIndex, newIng)
    } else{
      for(i; i<length; i++){
        if (this.shoppingListService.ingredients[i].name === value.name){
            console.log('name of item match');
            this.shoppingListService.addUpdateIngredient(i, newIng)
            break
        }
        else{ if(i+1 == length){
          this.shoppingListService.ingredients.push(newIng);
          console.log('not match')
          break
        }
        }
      }
    }
    this.editMode = false;
    form.reset();
    
    
  }
  // check(form: NgForm){
  //   //let length = this.shoppingListService.ingredients.length;
  //   //let i = 0
  //   let value = form.value;
  //   //const newIng = new Ingredient (value.name, value.amount);
  //   // for(i; i<length; i++){
  //   //   if (this.shoppingListService.ingredients[i].name === value.){
  //   //       console.log('true')
  //   //   }
  //   // }
  //   console.log(value)
    
  // }
  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete(){
    console.log(this.editItemIndex);
    if(this.editMode){
      this.shoppingListService.ingredients.splice(this.editItemIndex, 1);
    } else{
      console.log('Nothing to Delete')
    }
    
    this.slForm.reset();
    this.editMode = false;
    

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}

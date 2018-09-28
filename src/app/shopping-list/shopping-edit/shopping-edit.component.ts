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
  //3.new Subjext was created, data(index of Ingredients massive) passing through, so we can subscribe to it
  addOnItem(form: NgForm){
    const value = form.value;
    const newIng = new Ingredient (value.name, value.amount);
    if (this.editMode){
      this.shoppingListService.updateIngredient(this.editItemIndex, newIng)
    } else{
      this.shoppingListService.ingredients.push(newIng);
    }
    this.editMode = false;
    form.reset();
  }
  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete(){
    // this.subscription = this.shoppingListService.startedEditing
    //   .subscribe(
    //     (index:number) => {
    //       this.editMode = true;
    //       this.editItemIndex = index;
    //       this.shoppingListService.ingredients.splice(this.editItemIndex);
    //     }
    //   );
    
    
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

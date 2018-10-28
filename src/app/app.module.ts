import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { ShoppingListComponent } from './shopping-list/shoppingList.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { shoppingListService } from './shopping-list/shoppingListService';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { CaloCalComponent } from './calo-cal/calo-cal.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ColorChangeDirective } from './shared/color-change.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    MyCartComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    CaloCalComponent,
    HowItWorksComponent,
    ColorChangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [shoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

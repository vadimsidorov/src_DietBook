import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { RecipesComponent } from './recipes/recipes.component'
import { ShoppingListComponent } from './shopping-list/shoppingList.component'
import { CaloCalComponent } from './calo-cal/calo-cal.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

const appRoutes: Routes = [
    { path:'', redirectTo:'/recipes', pathMatch:'full'},
    { path:'recipes', component: RecipesComponent },
    { path:'shopping-list', component: ShoppingListComponent },
    { path:'calo-cal', component: CaloCalComponent },
    { path:'HowItWorks', component: HowItWorksComponent }
];
@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports:[RouterModule]
})

export class AppRoutingModule{

}
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { RecipesComponent } from './recipes/recipes.component'
import { ShoppingListComponent } from './shopping-list/shoppingList.component'
import { CaloCalComponent } from './calo-cal/calo-cal.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { RecipeListDinnerComponent } from './recipes/recipe-list-dinner/recipe-list-dinner.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeListLunchComponent } from './recipes/recipe-list-lunch/recipe-list-lunch.component';
import { RecipeListSnackComponent } from './recipes/recipe-list-snack/recipe-list-snack.component';
import { RecipeListBreakFastComponent } from './recipes/recipe-list-break-fast/recipe-list-break-fast.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserPageComponent } from './user-page/user-page.component';

const appRoutes: Routes = [
    { path: 'recipes', redirectTo: '/recipes/all', pathMatch:'full'},
    { path: '', redirectTo: '/recipes/all', pathMatch:'full'},
    { path: 'recipes', component: RecipesComponent,
        children: [{path: 'dinner', component: RecipeListDinnerComponent},
                  {path: 'lunch', component: RecipeListLunchComponent},
                  {path: 'snack', component: RecipeListSnackComponent},
                  {path: 'breakfast', component: RecipeListBreakFastComponent},
                  {path: 'all', component: RecipeListComponent}]},
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'calo-cal', component: CaloCalComponent },
    { path: 'HowItWorks', component: HowItWorksComponent },
    { path: 'signIn', component: SignInComponent},
    { path: 'signUp', component: SignUpComponent},
    { path: 'user', component: UserPageComponent}

];
@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports:[RouterModule]
})

export class AppRoutingModule{

}

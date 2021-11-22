import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";


const appRoutes: Routes = [
    { path: '' , redirectTo: '/receitas', pathMatch: 'full'},
    { path: 'receitas', component: RecipesComponent,
        children: [
            { path: '', component: RecipeStartComponent },
            { path: ':id', component: RecipeDetailComponent }
        ]},
    { path: 'lista-de-compras', component: ShoppingListComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
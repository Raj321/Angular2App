import{Routes,RouterModule} from '@angular/router'
import{NgModule} from '@angular/core'
import {RecipesComponent} from './recipes/recipes.component';
import{ShopingListComponent} from './shoping-list/shoping-list.component';
import{RecipeStartComponent} from './recipes/recipe-start/recipe-start.component'
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component'



const AppRoutes:Routes =[
    {path:'', redirectTo: '/recipes' ,pathMatch: 'full'},
    {path:'recipes', component: RecipesComponent, children:[
        {path:'' , component: RecipeStartComponent},
        {path:'new' , component: RecipeEditComponent},
        {path:':id' , component: RecipeDetailComponent},       
        {path:':id/edit' , component: RecipeEditComponent}

        
    ]},
    {path:'shoping-list', component: ShopingListComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(AppRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule{


}
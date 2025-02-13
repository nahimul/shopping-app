import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { AuthGuard } from './auth-gurd.service';

const routes: Routes = [
  {
    path: 'recipes', component: RecipesComponent, canActivateChild: [AuthGuard], children: [
      {
        path: 'recipe/:id', component: RecipesComponent
      }
    ],
  },{
    path: 'shopping-list', canActivate: [AuthGuard],loadChildren: () => import('./shoping-list/shoping-list.component').then(m => m.ShopingListComponent),  },
  {
    path:'**', redirectTo: 'Not-Found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

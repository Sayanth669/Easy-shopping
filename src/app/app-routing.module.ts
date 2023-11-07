import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { Real1Component } from './real1/real1.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/real1',
    pathMatch:'full'
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'real1',
    component:Real1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

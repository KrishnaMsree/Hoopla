import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';




export const routes: Routes = [
  { path : 'dashboard', component : DashboardComponent},
  { path : 'login', component : LoginComponent},
  { path : 'product-details/:prodId', component: ProductDetailsComponent},
  { path : 'view-orders', component : ViewOrdersComponent},
  { path : '**', redirectTo : 'dashboard', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

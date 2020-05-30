import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { RegisterComponent } from './register/register.component';
import { ViewProductsComponent } from './seller-dashboard/view-products/view-products.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { MyProfileComponent } from './seller-dashboard/my-profile/my-profile.component';
import { SearchComponent } from './search/search.component';


export const routes: Routes = [
  { path : 'dashboard', component : DashboardComponent},
  { path : 'login', component : LoginComponent},
  { path : 'register', component : RegisterComponent},
  { path : 'product-details/:prodId', component: ProductDetailsComponent},
  { path : 'view-orders', component : ViewOrdersComponent},
  { path : 'checkOutProducts', component : ViewOrdersComponent},
  { path : 'productPurchased/:categoryName', component : DashboardComponent},
  { path : 'dashboard/myProfile', component : MyProfileComponent},
  { path : 'dashboard/Furniture', component : DashboardComponent},
  { path : 'dashboard/Electronics', component : DashboardComponent},
  { path : 'dashboard/:category', component : DashboardComponent},
  { path : 'Notification/:categoryName', component : DashboardComponent},
  { path : 'searchProducts', component : SearchComponent},
  { path : 'dashboard/Clothing', component : DashboardComponent},
  { path : 'dashboard/Shoes', component : DashboardComponent},
  { path : 'dashboard/seller/myProducts', component : ViewProductsComponent},
  { path : 'dashboard/seller/addProduct', component : SellerDashboardComponent},
  { path : 'dashboard/seller/home', component : SellerDashboardComponent},
  { path : 'dashboard/seller/myProfile', component : MyProfileComponent},
  { path : 'dashboard/seller/editProduct', component : ViewProductsComponent},
  { path : '**', redirectTo : 'dashboard', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

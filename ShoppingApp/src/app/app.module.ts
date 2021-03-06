import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule,
  MatSliderModule,
  MatInputModule,
  MatToolbarModule,
  MatExpansionModule
} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchComponent } from './search/search.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { RegisterComponent } from './register/register.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { ViewProductsComponent } from './seller-dashboard/view-products/view-products.component';
import { MyProfileComponent } from './seller-dashboard/my-profile/my-profile.component';
import { SortPipe } from './sort.pipe';

// import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductDetailsComponent,
    SearchComponent,
    ViewOrdersComponent,
    RegisterComponent,
    SellerDashboardComponent,
    ViewProductsComponent,
    MyProfileComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDividerModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSliderModule,
    MatInputModule,
    MatToolbarModule,
    MatExpansionModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

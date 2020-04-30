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

// import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductDetailsComponent,
    SearchComponent,
    ViewOrdersComponent,
    RegisterComponent
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
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

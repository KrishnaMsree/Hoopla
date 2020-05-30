import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
// import { DashboardService } from './dashboard.service';
import { Router } from '@angular/router';
import { SellerDashboardService } from './seller-dashboard.service';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {

  uName = sessionStorage.getItem('userName')
  userEmail = sessionStorage.getItem('userEmail')
  welcomeMsg = "Welcome " + this.uName + "!"
  viewProducts = false;
  addProducts = false;
  errorMessage: string;
  successMessage: string;
  navLink = false;
  homevar = true;
  fileName;
  myProfile;
  
  constructor(private sellerDashboardservice: SellerDashboardService, private formBuilder: FormBuilder) { }
  firstFormGroup: FormGroup = this.formBuilder.group({
    userEmail:[this.userEmail, [Validators.required]],
    pName: ['', [Validators.required,Validators.pattern(/^[A-z ]+$/)]],
    pDesc: ['', [Validators.required,Validators.pattern(/^[A-z ]+$/)]],
    pRating: ['', [Validators.required,Validators.pattern(/^[1-5]$/)]],
    pCategory: ['', [Validators.required]],
    price: ['', [Validators.required]],
    color: ['', [Validators.required,Validators.pattern(/^[A-z ]+$/)]],
    image: ['', [Validators.required]],
    specification: ['', [Validators.required,Validators.pattern(/^[A-z ]+$/)]],
    firstDate: ['', [Validators.required]],
    lastDate: ['', [Validators.required]],
    sId: ['', [Validators.required,Validators.pattern(/^[A-z ]+(@seller)$/)]],
    pDiscount: ['', [Validators.required]],
    pQuantity: ['', [Validators.required]],
    pShippingCharges: ['', [Validators.required]]
  });
  ngOnInit() {
  }

  submitForm(){
    this.successMessage = this.errorMessage = null;
    this.sellerDashboardservice.sendProductDetails(this.firstFormGroup.value).subscribe(
      success => this.successMessage = success['message'],
      error => {this.errorMessage = error.error.message;
      if(this.errorMessage != "Something went wrong!! Please try again"){
        this.errorMessage = "Product already exists!"
      }
      else{
        this.errorMessage = "Something went wrong!! Please try again";
      }
      }
      
    );
  }
  imageFun(val){
   var path = val.target.value
   var array=path.split("fakepath")
   var f=array[array.length-1]
   f = f.substring(1)
   this.fileName=f    
  }
  Logout(v) {
    this.navLink = true;
    sessionStorage.clear();
  }
  home(){
    this.homevar = true;
    this.viewProducts = false;
    this.addProducts = false;
    this.myProfile = false;
  }
  add(){
    this.homevar = false;
    this.viewProducts = false;
    this.addProducts = true;
    this.myProfile = false;
  }
  view(){
    this.homevar = false;
    this.viewProducts = true;
    this.myProfile = false;
    this.addProducts = false;
  }
  profile(){
    this.myProfile = true;
    this.addProducts = false;
    this.homevar = false;
    this.viewProducts = false;
  }
}

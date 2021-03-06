import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { CategoryDetails } from '../shared/categorydetails';
import { Router } from '@angular/router';
import { MyProfileService } from '../seller-dashboard/myProfile/my-profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input()
  uName;
  uname = this.uName
  valid = false;
  search: string;
  categorydetails: any;
  searchDetails: any;
  errorMessage: string;
  successMessage;
  product;
  obj;
  zone = false;
  userType = sessionStorage.getItem('userType');
  userEmail = sessionStorage.getItem('userEmail');
  patternval;
  validsearch = false;
  sendData = false;
  searchObj;
  searchErrorMessage;
  navLink;
  cat;
  myProfile = false;
  tab;

  array = [{"imgArray":"./assets/furniture.png","titleArray":"Furniture",'ratingArray':"4.5*",
  'descArray':"Browse through our wide selection of Sofas, Mattresses, Beds and more.",
  'offersArray':"40% Offers",},{"imgArray":"./assets/clothing.jpg","titleArray":"Clothing",'ratingArray':"4.5*",
  'descArray':"Shop Online from trendy apparels for women, men & kids at best prices.",'offersArray':"50% Offers"},
  {"imgArray":"./assets/electronics.png","titleArray":"Electronics",'ratingArray':"4.2*",
  'descArray':"Shop for Mobile Phones, Tablets, Cameras, Televisions, Headphones and more.",'offersArray':"50% Offers"},
  {"imgArray":"./assets/shoes.jpg","titleArray":"Shoes",'ratingArray':"5*",'descArray':"Shop for an attractive range of shoes for men, women and kids from leading brands.",
  'offersArray':"50% Offers"}]
  navLinkOrders;
  welcomeMsg;
  slideIndex = 1;
  isLinear = false;
  home = false;
  filterOption;
  constructor(private dashboardservice: DashboardService, private router: Router,private myProfileService: MyProfileService) { }
  
  


  ngOnInit() {
    this.welcomeMsg = "Welcome "+ this.uName + "!";
    this.tab = true;
    this.successMessage = this.errorMessage = null;
    this.myProfileService.getRegisterDetails(this.userEmail).subscribe(
      data => this.successMessage = data,
      error => this.errorMessage = error.error.message
    );
  
  }
  validFromLogin(val){
    this.navLink = val;
  }
  filterButton(val){
    this.filterOption = val;
  }

  profile(){
    this.validsearch = false;
    this.myProfile = true;
    this.navLinkOrders = false;
    this.tab = true;
    this.sendData = false;
    this.patternval = false;
    this.valid = false;
  }
  searchbutton(val) {
    this.errorMessage = this.successMessage = null;
    this.validsearch = true;
    this.patternval = val;
    this.sendData = false;
    this.tab = true;
    this.navLinkOrders = false;
    this.myProfile = false;
    this.valid = false;

  }
  getSeachDetails(val) {
    this.validsearch = val;
    this.sendData = false;
    this.myProfile = false;
    this.navLinkOrders = false;
    this.tab = true;
  }
  cart() {
    this.navLinkOrders = true;
    this.navLink = false;
    this.sendData = false;
    this.valid = false;
    this.myProfile = false;
    this.tab = true;
    this.validsearch = false;
    
  }
  Logout(v) {
    this.navLink = true;
    sessionStorage.clear();
  }
  DataFromOrders(val) {
    this.errorMessage = this.successMessage = null;
    this.navLinkOrders = val;
    
  }
  getNavLinkFromProductDetails(val){
    this.navLink = val;
    sessionStorage.clear();
  }
  getNavLinkFromSearch(val){
    this.navLink = val;
    sessionStorage.clear();
  }
  getDataFromChild(val) {
    this.errorMessage = this.successMessage = null;
    this.sendData = val;
  }
  keyup(value) {
    this.tab = true;
    this.errorMessage = this.successMessage = null;
    this.navLinkOrders = false;
    this.validsearch = false;
    this.myProfile = false;
    this.patternval = false;
    this.valid = true;
    this.product = value;
    this.dashboardservice.view(value).subscribe(
      data => {
        this.categorydetails = data
      },
      error => this.errorMessage = error.error.message
    );
  }
  buyNow(category) {
    this.errorMessage = this.successMessage = null;
    this.keyup(category.pCategory)
    this.cat = category;
    const orderArray: Array<any> = new Array();
    const b = new Date();    
    if (this.uName != undefined) {
      orderArray.push({emailId: this.uName, pid: category._id,
        pName: category.pName, pQuantity: category.pSeller.pQuantity,
        price: category.price, orderDate: b.toString(), image: category.image});
      this.dashboardservice.sendOrderDetails(orderArray).subscribe(
        success => {
          this.successMessage = success['message'];
          if(this.successMessage!=null){
            this.router.navigate(['/productPurchased/'+category.pName])
          }
        },
        error => this.errorMessage = error.error.message
      );
      this.keyup(category.pCategory);
    }
    else {
      this.keyup(category.pCategory);
      this.errorMessage = 'Please Login to your account';

    }
  }
  myHome(){
    // this.home = true;
    this.valid = false;
    this.myProfile = false;
    this.navLinkOrders = false;
    this.validsearch = false;
  }
  Notification() {
    this.errorMessage = this.successMessage = null;
    alert('You will be notified when product is Available! Thank you');
  }
  productDetails(category) {
    this.errorMessage = this.successMessage = null;
    this.tab = true;
    this.sendData = true;
    this.obj = category;
    // this.router.navigate(["/product-details/" + category["_id"]])
  }
  myzone() {
    this.errorMessage = this.successMessage = null;
    this.zone = true;
  }



}

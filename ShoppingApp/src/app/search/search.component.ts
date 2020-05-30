import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from './search.service';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input()
  searchFromDashboard;

  @Input()
  userEmailId;
  @Output()
  customSeachEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  navLinkEvent: EventEmitter<any> = new EventEmitter();
  errorMessage: string;
  successMessage: string;
  orderArray: Array<any> = new Array();
  cat;
  sendData;
  obj;
  navLinkOrders;
  errors;
  error: string = null;
  productLoaded;
  navLink;
  searchResult: Array<object> = [];
  searchValue: string;
  constructor(private searchservice: SearchService, private router: Router) { }
  getSeachDetails(val){
    this.sendData = val;
  }
  ngOnInit() {
  this.error = null;
  this.errorMessage = this.successMessage = null;
  this.productLoaded = false;
  this.searchValue =  this.searchFromDashboard;
  this.searchValue = this.searchValue.toLowerCase();
  this.searchservice.viewAll(this.searchValue).subscribe(
    (success) => {
      this.productLoaded = true;
      let i = 0;
      for (const item in success) {
        const category = success[item].pCategory.toLowerCase();
        const des = success[item].pDescription.toLowerCase();
        const name = success[item].pName.toLowerCase();
        if (category.includes(this.searchValue) || des.includes(this.searchValue) || name.includes(this.searchValue)) {
          this.searchResult[i] = success[item];
          i += 1;
        }
      }
      if (this.searchResult.length === 0) {
        this.error = `We could not find any products named: ${this.searchValue}`;
      }
    }
    );
  }
  Logout(v) {
    this.navLink = true;
    sessionStorage.clear();
  }
  getDataFromChild(val){
    this.sendData = val;
  }
  Notification() {
    this.errorMessage = this.successMessage = null;
    alert('You will be notified when product is Available! Thank you');
  }
  sendSearchDetails() {
    this.customSeachEvent.emit(false);
  }
  sendNavLinkFromSearch() {
    this.navLinkEvent.emit(true);
  }
  buyNow(category) {
    this.errorMessage = this.successMessage = null;
    // this.keyup(category.pCategory)
    this.cat = category;
    const orderArray: Array<any> = new Array();
    const b = new Date();    
    if (this.userEmailId != undefined) {
      orderArray.push({emailId: this.userEmailId, pid: category._id,
        pName: category.pName, pQuantity: category.pSeller.pQuantity,
        price: category.price, orderDate: b.toString(), image: category.image});
      this.searchservice.sendOrderDetails(orderArray).subscribe(
        success => {
          this.successMessage = success['message'];
          if(this.successMessage!=null){
            this.router.navigate(['/productPurchased/'+category.pName])
          }
        },
        error => this.errorMessage = error.error.message
      );
      // this.keyup(category.pCategory);
    }
    else {
      // this.keyup(category.pCategory);
      this.errorMessage = 'Please Login to your account';

    }
  }
  productDetails(category) {
    this.errorMessage = this.successMessage = null;
    this.sendData = true;
    this.obj = category;
    // this.router.navigate(["/product-details/" + category["_id"]])
  }
}

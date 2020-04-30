import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from './search.service';
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
  searchResult: Array<object> = [];
  searchValue: string;
  constructor(private searchservice: SearchService) { }
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
  getDataFromChild(val){
    this.sendData = val;
  }
  sendSearchDetails() {
    this.customSeachEvent.emit(false);
  }
  buyNow(category) {
    this.cat = category;
    this.errorMessage = this.successMessage = null;
    this.orderArray.push({emailId: this.userEmailId, pid: category._id, pName: category.pName,
      pQuantity: category.pSeller.pQuantity, orderDate: new Date().toString(),
      price: category.price, image: category.image});
    // console.log(this.orderArray,typeof(this.orderArray));
    this.searchservice.sendOrderDetails(this.orderArray).subscribe(
      success => this.successMessage = success['message'],
      error => this.errorMessage = error.error.message
    );
    // alert("You have successfully bought this item")
  }
  productDetails(category) {
    this.errorMessage = this.successMessage = null;
    this.sendData = true;
    this.obj = category;
    // this.router.navigate(["/product-details/" + category["_id"]])
  }
}

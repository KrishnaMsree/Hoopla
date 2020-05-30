import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ProductDetailsService } from './product-details.service';
import { CategoryDetails } from '../shared/categorydetails';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input()
  categoryFromDashboard;
  @Input()
  userName;
  @Output()
  customEvent: EventEmitter<any> = new EventEmitter();
  @Output()
  navLinkEvent: EventEmitter<any> = new EventEmitter();
  constructor(private productdetails: ProductDetailsService, private router: Router) { }
  productDetails;
  categoryArray: Array<any>;
  c: any;
  successMessage;
  cat;
  onsubmitted = false;
  errorMessage: string;
  ngOnInit() {
  }
  DatafromProductDetails() {
    // this.onsubmitted = true
    this.customEvent.emit(false);
  }
  sendNavLinkFromSearch(){
    this.navLinkEvent.emit(true);
  }
  buyNow(category) {
    this.errorMessage = this.successMessage = null;
    this.cat = category;
    const orderArray: Array<any> = new Array();
    const b = new Date();
    if (this.userName != null) {
      orderArray.push({emailId: this.userName, pid: category._id,
        pName: category.pName, pQuantity: category.pSeller.pQuantity,
        price: category.price, orderDate: b.toString(), image: category.image});
      this.productdetails.sendOrderDetails(orderArray).subscribe(
        success => {
          this.successMessage = success['message'];
          if(this.successMessage!=null){
            this.router.navigate(['/productPurchased/'+category.pName])
          }
        },
        error => this.errorMessage = error.error.message
      );
    }
    else {
      this.errorMessage = 'Please Login to your account';
    }
  }
}

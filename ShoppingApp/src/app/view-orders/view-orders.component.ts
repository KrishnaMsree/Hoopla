import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ViewOrdersService } from './view-orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  @Input()
  userEmailId;
  @Output()
  viewevent: EventEmitter<any> = new EventEmitter();
  orders;
  sum;
  tax;
  length = 0;
  noofOrders;
  totalPrice;
  valid = false;
  errorMessage;
  successMessage;
  DatafromProductDetails() {
    this.viewevent.emit(false);
  }
  constructor(private viewOrderService: ViewOrdersService, private router: Router) { }
  ngOnInit() {
    this.getOrders()
  }
  remove(val){
    this.successMessage = this.errorMessage = null;
    this.viewOrderService.removeOrder(val.pid).subscribe(
      success => this.successMessage = success['message'],
      error => this.errorMessage = error.error.message
    )
    this.getOrders();
  }
  getOrders(){
    this.successMessage = this.errorMessage = null;
    this.viewOrderService.viewAllOrders(this.userEmailId).subscribe(
      data => {
        this.orders = data;
        this.sum = 0;
        for(var i = 0 ; i<this.orders.length;i++){
          this.sum += this.orders[i].price
        }
        if(this.orders.length>0){
          this.length = this.orders.length;
        }
      },
      error => {
        this.errorMessage = error.error.message;
        this.length = 0
      }
    );
  }
  checkout(sum){
    this.successMessage = this.errorMessage = null;
    this.tax = (sum*17)/100;
    this.valid = true;
  }
}

import { Component, OnInit } from '@angular/core';
import { ViewProductsService } from './view-products.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  length = 0;
  orders;
  sum;
  id;
  editvar = false;
  noofOrders;
  totalPrice;
  valid = false;
  errorMessage;
  userEmail = sessionStorage.getItem('userEmail')
  pId = sessionStorage.getItem('pId')
  successMessage;
  l
  constructor(private viewOrderService: ViewProductsService, private router: Router, private formBuilder: FormBuilder) { }
  firstFormGroup: FormGroup 

  ngOnInit() {
    this.getOrders()
    this.firstFormGroup = this.formBuilder.group({
      userEmail:[this.userEmail, [Validators.required]],
      pId:[this.id, [Validators.required]],
      price: ['', [Validators.required]],
      color: ['', [Validators.required,Validators.pattern(/^[A-z ]+$/)]],
      pDiscount: ['', [Validators.required]],
      pQuantity: ['', [Validators.required]],
      pShippingCharges: ['', [Validators.required]]
    });
  }
  Edit(id){
    sessionStorage.setItem('pId',id);
    this.id = id;
    this.editvar = true; 
    this.ngOnInit()
  }
  close(){
    sessionStorage.removeItem('pId')
    this.editvar = false; 
    // this.ngOnInit()
    this.getOrders()
  }
  editItem(){
    this.successMessage = this.errorMessage = null;
    this.viewOrderService.editProduct(this.firstFormGroup.value).subscribe(
      data => this.successMessage = data['message'],
      error => this.errorMessage = error.error.message
    );
  }
  getOrders(){
    this.successMessage = this.errorMessage = null;
    this.viewOrderService.viewAllOrders(this.userEmail).subscribe(
      data => {
        this.orders = data;
        this.l = this.orders[0]['products'].length
        this.sum = 0;
        for(var i = 0 ; i<this.orders[0]['products'].length;i++){
          this.sum += this.orders[0]['products'][i].price          
        }
        if(this.orders[0]['products'].length>0){
          this.length = this.orders[0]['products'].length;
        }
      },
      error => {
        this.errorMessage = error.error.message;
        this.length = 0
      }
    );
  }

}

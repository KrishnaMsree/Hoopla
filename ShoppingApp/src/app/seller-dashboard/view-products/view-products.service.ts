import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewProductsService {


  url;
  constructor(private http: HttpClient) { }
  viewAllOrders(emailId) {
    this.url = 'http://localhost:2000/getSellerProducts/' + emailId;
    return this.http.get(this.url);
  }
  editProduct(editproduct){
    this.url = 'http://localhost:2000/editProduct/';
    return this.http.post(this.url,editproduct);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellerDashboardService {
  url;
  constructor(private http: HttpClient) { }
  sendProductDetails(product) {
    this.url = 'http://localhost:2000/addProduct';
    return this.http.post(this.url, product);
  }
}

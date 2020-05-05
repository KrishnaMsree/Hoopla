import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryDetails } from '../shared/categorydetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  url;
  constructor(private http: HttpClient) { }
  view(categoryName): Observable<CategoryDetails[]> {
    this.url = 'http://localhost:2000/category/' + categoryName;
    return this.http.get<CategoryDetails[]>(this.url);
  }
  sendOrderDetails(user) {
    this.url = 'http://localhost:2000/order';
    // console.log("URL : ",this.url,"Quantity : "+ user[0].pQuantity + "User Parameter : " + user);
    return this.http.post(this.url, user);
  }
}

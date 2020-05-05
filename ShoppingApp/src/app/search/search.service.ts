import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryDetails } from '../shared/categorydetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url;
  constructor(private http: HttpClient) { }
  viewAll(searchvalue): Observable<CategoryDetails[]> {
    this.url = 'http://localhost:2000/getProducts/' + searchvalue;
    return this.http.get<CategoryDetails[]>(this.url);
  }
  sendOrderDetails(user) {
    this.url = 'http://localhost:2000/order';
    // console.log("URL : ",this.url,"Quantity : "+user.pQuantity);
    return this.http.post(this.url, user);
  }
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { CategoryDetails } from '../shared/categorydetails';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ViewOrdersService {
  url;
  constructor(private http: HttpClient) { }
  viewAllOrders(emailId) {
    this.url = 'http://localhost:2000/getOrders/' + emailId;
    return this.http.get(this.url);
  }
  removeOrder(pid) {
    this.url = 'http://localhost:2000/removeOrder/' + pid;
    return this.http.delete(this.url);
  }
}

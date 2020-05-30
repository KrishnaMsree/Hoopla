import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {


  url;
  constructor(private http: HttpClient) { }
  getRegisterDetails(emailId) {
    this.url = 'http://localhost:2000/getRegisterDetails/' + emailId;
    return this.http.get(this.url);
  }
}

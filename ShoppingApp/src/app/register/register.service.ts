import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url;
  constructor(private http: HttpClient) { }
  sendRegisterDetails(user) {
    this.url = 'http://localhost:2000/register';
    return this.http.post(this.url, user);
  }
}

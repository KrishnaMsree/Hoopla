import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  errorMessage: string;
  url;
  constructor(private http: HttpClient) { }

  loginData(formData: any): Observable<any> {
    this.url = 'http://localhost:2000/login';
    return <Observable<any>> this.http.post(this.url, formData);
  }
}

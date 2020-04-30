import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  text = 'Login Form';
  errorMessage: string;
  successMessage: string;
  valid = true;
  username;
  sessionStorageEmail: any;
  constructor(private fb: FormBuilder, private loginservice: LoginService) { }
  loginForm: FormGroup = this.fb.group({
    emailId: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+@gmail.com$/)]],
    password: ['', [Validators.required]]
  });
  ngOnInit() {
  }
  login() {
    this.successMessage = null;
    this.errorMessage = null;
    // this.router.navigate(['/dashboard'])
    this.loginservice.loginData(this.loginForm.value).subscribe(
      response => {
      this.successMessage = response.message;
      this.username = this.successMessage.substring(8, 30);
      sessionStorage.setItem('EmailId', this.username);
      this.sessionStorageEmail = sessionStorage.getItem('EmailId');
      // console.log("sse : "+this.sessionStorageEmail);
    }, err => this.errorMessage = err.error.message);
  }
  keysuccess() {
      this.valid = false;
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output()
  dashboard: EventEmitter<any> = new EventEmitter();
  username;
  data;
  registerbutton = false;
  sessionStorageData: any;
  constructor(private fb: FormBuilder, private loginservice: LoginService, private router: Router) { }
  loginForm: FormGroup = this.fb.group({
    emailId: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+@gmail.com$/)]],
    password: ['', [Validators.required]]
  });
  ngOnInit() {
  }
  register(){
    this.registerbutton = true;
  }
  login() {
    this.successMessage = null;
    this.errorMessage = null;
    // this.router.navigate(['/dashboard'])
    this.loginservice.loginData(this.loginForm.value).subscribe(
      response => {
      this.data = response.message;
      sessionStorage.setItem('userEmail', this.data.emailId);
      sessionStorage.setItem('userName', this.data.name);
      sessionStorage.setItem('userType', this.data.ctype);
      this.username = sessionStorage.getItem('userName');
      this.successMessage = 'Welcome '+this.username;
      if(this.successMessage!=null){
        this.keysuccess()
      }
      }, err => this.errorMessage = err.error.message);
  }
  keysuccess() {
      this.valid = false;
      this.router.navigate(['/dashboard'])
  }
  myHome(){
    this.dashboard.emit(false);
  }
}

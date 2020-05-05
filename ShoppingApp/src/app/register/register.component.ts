import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title: string = "register works!"
  errorMessage: string;
  successMessage: string;
  valid = true;
  // registerForm: FormGroup;
  constructor(private fb: FormBuilder, private registerService: RegisterService) { }
  registerForm: FormGroup = this.fb.group({
    emailId: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+@gmail.com$/)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    name: ['',[Validators.required,Validators.pattern(/^[A-z]+$/)]],
    phoneNo: ['',[Validators.required,Validators.pattern(/^[6-9][0-9]{9}$/)]]
  });

  ngOnInit() {    
  }
  login(){
    this.valid = false;
  }
  register(){
    this.successMessage = this.errorMessage = null;
    this.registerService.sendRegisterDetails(this.registerForm.value).subscribe(
      success => this.successMessage = success['message'],
      error => this.errorMessage = error.error.message
    );
    
  }
}

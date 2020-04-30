import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from '../app.component';
import { routes } from '../app-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

class MockLoginService {
  loginData(): Observable<any> { return new Observable(); }

}
class MockProductDetailsService {
  viewProductDetails(): Observable<any> { return new Observable() }
    // delete(): Observable<any> { return new Observable(); }
}


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents()
    }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should have text Login Page', async(() => {
  //   expect(component.text).toEqual('Login Form');
  // }));

  // it('should set Valid to false ', async(() => {
  //   component.keysuccess();
  //   expect(component.valid).toBeFalsy();
  // }));
  
  // it('Form Should be Valid ', async(() => {
  //   component.loginForm.controls['emailId'].setValue('demo@infy.com');
  //   component.loginForm.controls['password'].setValue('demo');
  //   expect(component.loginForm.valid).toBeTruthy();
  // }));

  // it('LoginComponent: Added required dependencies without additional dependencies', inject([LoginService, FormBuilder], (service: LoginService, fb: FormBuilder) => {
  //   expect(service).not.toBeNull('service not injected');
  //   expect(fb).not.toBeNull('Form builder not injected');
  // }));


});


import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [LoginService]
    })
        .compileComponents();
}));

  // it('should be created', () => {
  //   const service: LoginService = TestBed.get(LoginService);
  //   expect(service).toBeTruthy();
  // });

  it('url should not to be null', () => {
    const service: LoginService = TestBed.get(LoginService);
    // service.viewAll('ele');
    expect(service.url).toBeUndefined();
  });

  it('HttpClient must be injected in LoginService', inject([HttpClient], (http: HttpClient) => {
    expect(http).not.toBeNull('HttpClient should be provided');
    const service = new LoginService(http);
    expect(service instanceof LoginService).toBe(true, 'New service should be ok');
}));

});

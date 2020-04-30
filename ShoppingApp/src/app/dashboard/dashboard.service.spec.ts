import { TestBed, inject, async } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { XHRBackend, Response, ResponseOptions } from '@angular/http';
// import { BookFlightService } from '../book-flight/book-flight.service';
import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';

import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [DashboardService]
    })
        .compileComponents();
}));

  // it('should be created', () => {
  //   const service: DashboardService = TestBed.get(DashboardService);
  //   expect(service).toBeTruthy();
  // });

  it('url should not to be null', () => {
    const service: DashboardService = TestBed.get(DashboardService);
    // service.viewAll('ele');
    expect(service.url).toBeUndefined();
  });
  it('HttpClient must be injected in DashboardService', inject([HttpClient], (http: HttpClient) => {
    expect(http).not.toBeNull('HttpClient should be provided');
    const service = new DashboardService(http);
    expect(service instanceof DashboardService).toBe(true, 'New service should be ok');
}));
});

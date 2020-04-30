import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { ViewOrdersService } from './view-orders.service';

describe('ViewOrdersService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ViewOrdersService]
    })
        .compileComponents();
}));

  // it('should be created', () => {
  //   const service: ViewOrdersService = TestBed.get(ViewOrdersService);
  //   expect(service).toBeTruthy();
  // });
  it('should be created', () => {
    const service: ViewOrdersService = TestBed.get(ViewOrdersService);
    expect(service.url).toBeUndefined();
  });

  it('HttpClient must be injected in ViewOrdersService', inject([HttpClient], (http: HttpClient) => {
    expect(http).not.toBeNull('HttpClient should be provided');
    const service = new ViewOrdersService(http);
    expect(service instanceof ViewOrdersService).toBe(true, 'New service should be ok');
  }));
});

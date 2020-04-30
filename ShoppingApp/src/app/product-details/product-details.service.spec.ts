import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductDetailsService } from './product-details.service';

describe('ProductDetailsService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ProductDetailsService]
    })
        .compileComponents();
}));

  // it('should be created', () => {
  //   const service: ProductDetailsService = TestBed.get(ProductDetailsService);
  //   expect(service).toBeTruthy();
  // });

  it('url should not to be null', () => {
    const service: ProductDetailsService = TestBed.get(ProductDetailsService);
    // service.viewAll('ele');
    expect(service.url).toBeUndefined();
  });

  it('HttpClient must be injected in ProductDetailsService', inject([HttpClient], (http: HttpClient) => {
    expect(http).not.toBeNull('HttpClient should be provided');
    const service = new ProductDetailsService(http);
    expect(service instanceof ProductDetailsService).toBe(true, 'New service should be ok');
}));
});

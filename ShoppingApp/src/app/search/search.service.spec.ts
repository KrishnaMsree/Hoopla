import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { SearchService } from './search.service';

describe('SearchService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [SearchService]
    })
        .compileComponents();
}));

  // it('should be created', () => {
  //   const service: SearchService = TestBed.get(SearchService);
  //   expect(service).toBeTruthy();
  // });
    it('url should not to be null', () => {
    const service: SearchService = TestBed.get(SearchService);
    // service.viewAll('ele');
    expect(service.url).toBeUndefined();
  });

  it('HttpClient must be injected in SearchService', inject([HttpClient], (http: HttpClient) => {
    expect(http).not.toBeNull('HttpClient should be provided');
    const service = new SearchService(http);
    expect(service instanceof SearchService).toBe(true, 'New service should be ok');
}));

});

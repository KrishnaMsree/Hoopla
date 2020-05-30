import { TestBed } from '@angular/core/testing';

import { ViewProductsService } from './view-products.service';

describe('ViewProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewProductsService = TestBed.get(ViewProductsService);
    expect(service).toBeTruthy();
  });
});

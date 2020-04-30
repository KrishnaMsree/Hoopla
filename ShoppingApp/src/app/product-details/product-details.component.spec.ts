import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should render title from h6 tag ', async(() => {
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h6').textContent).not.toBeNull()
  // }));

  // it('should set onsubmitted to true ', () => {
  //   // component.DatafromProductDetails();
  //   expect(component.onsubmitted).toBeFalsy();
  // });

});

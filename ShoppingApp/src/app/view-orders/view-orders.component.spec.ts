import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrdersComponent } from './view-orders.component';
import { ViewOrdersService } from './view-orders.service';

describe('ViewOrdersComponent', () => {
  let component: ViewOrdersComponent;
  let fixture: ComponentFixture<ViewOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  // it('Error Message should be null', () => {
  //   component.ngOnInit()
  //   expect(component.errorMessage).toBeNull();
  // });
});

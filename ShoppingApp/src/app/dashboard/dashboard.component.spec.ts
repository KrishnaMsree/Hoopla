import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      // providers: [LoginService]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  // it('should render title from span tag ', async(() => {
  //   const compiled = fixture.debugElement.nativeElement;
  //   // component.DataFromOrders('v');
  //   expect(compiled.querySelector('span').textContent).toContain('My Shopping Zone');
  // }));

  // it('should set navLinkOrders to true ', async(() => {
  //   component.DataFromOrders('v');
  //   expect(component.navLinkOrders).toBeTruthy();
  // }));

  // it('should set navLinkOrders to true ', async(() => {
  //   // component.Notification();
  //   expect(component.product).toBeUndefined();
  // }));
//   it('HttpClient must be injected in LoginService', inject([DashboardService], (ds: DashboardService) => {
//     expect(ds).not.toBeNull('HttpClient should be provided');
//     const service = new DashboardComponent(ds);
//     expect(service instanceof DashboardComponent).toBe(true, 'New service should be ok');
// }));

});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoreditStaffComponent } from './addoredit-staff.component';

describe('AddoreditStaffComponent', () => {
  let component: AddoreditStaffComponent;
  let fixture: ComponentFixture<AddoreditStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoreditStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoreditStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

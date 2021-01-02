import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoreditAdmissionComponent } from './addoredit-admission.component';

describe('AddoreditAdmissionComponent', () => {
  let component: AddoreditAdmissionComponent;
  let fixture: ComponentFixture<AddoreditAdmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoreditAdmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoreditAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

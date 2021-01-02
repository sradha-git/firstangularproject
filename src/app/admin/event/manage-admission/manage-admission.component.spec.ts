import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAdmissionComponent } from './manage-admission.component';

describe('ManageAdmissionComponent', () => {
  let component: ManageAdmissionComponent;
  let fixture: ComponentFixture<ManageAdmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAdmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageownerComponent } from './manageowner.component';

describe('ManageownerComponent', () => {
  let component: ManageownerComponent;
  let fixture: ComponentFixture<ManageownerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageownerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

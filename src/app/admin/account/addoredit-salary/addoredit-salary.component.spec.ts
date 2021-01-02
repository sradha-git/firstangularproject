import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoreditSalaryComponent } from './addoredit-salary.component';

describe('AddoreditSalaryComponent', () => {
  let component: AddoreditSalaryComponent;
  let fixture: ComponentFixture<AddoreditSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoreditSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoreditSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

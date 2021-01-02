import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoreditIncomeComponent } from './addoredit-income.component';

describe('AddoreditIncomeComponent', () => {
  let component: AddoreditIncomeComponent;
  let fixture: ComponentFixture<AddoreditIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoreditIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoreditIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

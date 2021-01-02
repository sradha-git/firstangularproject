import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoreditExpenditureComponent } from './addoredit-expenditure.component';

describe('AddoreditExpenditureComponent', () => {
  let component: AddoreditExpenditureComponent;
  let fixture: ComponentFixture<AddoreditExpenditureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoreditExpenditureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoreditExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

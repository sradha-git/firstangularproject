import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoreditInitialInvestmentComponent } from './addoredit-initial-investment.component';

describe('AddoreditInitialInvestmentComponent', () => {
  let component: AddoreditInitialInvestmentComponent;
  let fixture: ComponentFixture<AddoreditInitialInvestmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoreditInitialInvestmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoreditInitialInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

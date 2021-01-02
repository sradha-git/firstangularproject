import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInitialInvestmentComponent } from './manage-initial-investment.component';

describe('ManageInitialInvestmentComponent', () => {
  let component: ManageInitialInvestmentComponent;
  let fixture: ComponentFixture<ManageInitialInvestmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageInitialInvestmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageInitialInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

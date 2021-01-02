import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInitialInvestmentComponent } from './edit-initial-investment.component';

describe('EditInitialInvestmentComponent', () => {
  let component: EditInitialInvestmentComponent;
  let fixture: ComponentFixture<EditInitialInvestmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInitialInvestmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInitialInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

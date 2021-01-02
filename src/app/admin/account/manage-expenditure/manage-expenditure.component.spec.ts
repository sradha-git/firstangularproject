import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExpenditureComponent } from './manage-expenditure.component';

describe('ManageExpenditureComponent', () => {
  let component: ManageExpenditureComponent;
  let fixture: ComponentFixture<ManageExpenditureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageExpenditureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

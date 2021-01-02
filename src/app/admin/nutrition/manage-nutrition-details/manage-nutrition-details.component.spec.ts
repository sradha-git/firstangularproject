import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNutritionDetailsComponent } from './manage-nutrition-details.component';

describe('ManageNutritionDetailsComponent', () => {
  let component: ManageNutritionDetailsComponent;
  let fixture: ComponentFixture<ManageNutritionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageNutritionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageNutritionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

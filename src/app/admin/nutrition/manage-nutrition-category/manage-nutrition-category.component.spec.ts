import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNutritionCategoryComponent } from './manage-nutrition-category.component';

describe('ManageNutritionCategoryComponent', () => {
  let component: ManageNutritionCategoryComponent;
  let fixture: ComponentFixture<ManageNutritionCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageNutritionCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageNutritionCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

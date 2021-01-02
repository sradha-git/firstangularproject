import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFitnessCategoryComponent } from './edit-fitness-category.component';

describe('EditFitnessCategoryComponent', () => {
  let component: EditFitnessCategoryComponent;
  let fixture: ComponentFixture<EditFitnessCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFitnessCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFitnessCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFitnessCategoryComponent } from './add-fitness-category.component';

describe('AddFitnessCategoryComponent', () => {
  let component: AddFitnessCategoryComponent;
  let fixture: ComponentFixture<AddFitnessCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFitnessCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFitnessCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFitnessCategoryComponent } from './manage-fitness-category.component';

describe('ManageFitnessCategoryComponent', () => {
  let component: ManageFitnessCategoryComponent;
  let fixture: ComponentFixture<ManageFitnessCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageFitnessCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFitnessCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePersonalTrainingComponent } from './manage-personal-training.component';

describe('ManagePersonalTrainingComponent', () => {
  let component: ManagePersonalTrainingComponent;
  let fixture: ComponentFixture<ManagePersonalTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePersonalTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePersonalTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonalTrainingComponent } from './edit-personal-training.component';

describe('EditPersonalTrainingComponent', () => {
  let component: EditPersonalTrainingComponent;
  let fixture: ComponentFixture<EditPersonalTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPersonalTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersonalTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoreditPersonalTrainingComponent } from './addoredit-personal-training.component';

describe('AddoreditPersonalTrainingComponent', () => {
  let component: AddoreditPersonalTrainingComponent;
  let fixture: ComponentFixture<AddoreditPersonalTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoreditPersonalTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoreditPersonalTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

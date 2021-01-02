import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGymDetailsComponent } from './add-gym-details.component';

describe('AddGymDetailsComponent', () => {
  let component: AddGymDetailsComponent;
  let fixture: ComponentFixture<AddGymDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGymDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGymDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

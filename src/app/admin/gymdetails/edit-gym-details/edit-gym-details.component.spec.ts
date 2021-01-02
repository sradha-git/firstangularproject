import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGymDetailsComponent } from './edit-gym-details.component';

describe('EditGymDetailsComponent', () => {
  let component: EditGymDetailsComponent;
  let fixture: ComponentFixture<EditGymDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGymDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGymDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

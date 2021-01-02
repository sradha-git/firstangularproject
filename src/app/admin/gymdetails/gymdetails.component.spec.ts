import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymdetailsComponent } from './gymdetails.component';

describe('GymdetailsComponent', () => {
  let component: GymdetailsComponent;
  let fixture: ComponentFixture<GymdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

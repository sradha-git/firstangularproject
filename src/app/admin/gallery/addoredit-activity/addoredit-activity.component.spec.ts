import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoreditActivityComponent } from './addoredit-activity.component';

describe('AddoreditActivityComponent', () => {
  let component: AddoreditActivityComponent;
  let fixture: ComponentFixture<AddoreditActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoreditActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoreditActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

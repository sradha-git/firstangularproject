import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoreditVideoComponent } from './addoredit-video.component';

describe('AddoreditVideoComponent', () => {
  let component: AddoreditVideoComponent;
  let fixture: ComponentFixture<AddoreditVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoreditVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoreditVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

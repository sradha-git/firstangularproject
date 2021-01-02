import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoreditOwnerComponent } from './addoredit-owner.component';

describe('AddoreditOwnerComponent', () => {
  let component: AddoreditOwnerComponent;
  let fixture: ComponentFixture<AddoreditOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoreditOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoreditOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoreditEnqueryComponent } from './addoredit-enquery.component';

describe('AddoreditEnqueryComponent', () => {
  let component: AddoreditEnqueryComponent;
  let fixture: ComponentFixture<AddoreditEnqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoreditEnqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoreditEnqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

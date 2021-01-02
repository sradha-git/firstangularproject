import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEnqueryComponent } from './edit-enquery.component';

describe('EditEnqueryComponent', () => {
  let component: EditEnqueryComponent;
  let fixture: ComponentFixture<EditEnqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEnqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEnqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

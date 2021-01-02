import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEnqueryComponent } from './manage-enquery.component';

describe('ManageEnqueryComponent', () => {
  let component: ManageEnqueryComponent;
  let fixture: ComponentFixture<ManageEnqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEnqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEnqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagegymdetailsComponent } from './managegymdetails.component';

describe('ManagegymdetailsComponent', () => {
  let component: ManagegymdetailsComponent;
  let fixture: ComponentFixture<ManagegymdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagegymdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagegymdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

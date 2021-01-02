import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePackageDetailsComponent } from './manage-package-details.component';

describe('ManagePackageDetailsComponent', () => {
  let component: ManagePackageDetailsComponent;
  let fixture: ComponentFixture<ManagePackageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePackageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePackageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

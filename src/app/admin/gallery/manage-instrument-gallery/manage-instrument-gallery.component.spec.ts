import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInstrumentGalleryComponent } from './manage-instrument-gallery.component';

describe('ManageInstrumentGalleryComponent', () => {
  let component: ManageInstrumentGalleryComponent;
  let fixture: ComponentFixture<ManageInstrumentGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageInstrumentGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageInstrumentGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

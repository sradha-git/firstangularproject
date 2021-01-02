import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { SharedModule } from '../shared/shared.module';
import { ManageInstrumentGalleryComponent } from './manage-instrument-gallery/manage-instrument-gallery.component';
import { ManageVideoComponent } from './manage-video/manage-video.component';
import { ManageActivityComponent } from './manage-activity/manage-activity.component';
import { AddoreditActivityComponent } from './addoredit-activity/addoredit-activity.component';
import { AddoreditInstrumentGalleryComponent } from './addoredit-instrument-gallery/addoredit-instrument-gallery.component';
import { AddoreditVideoComponent } from './addoredit-video/addoredit-video.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { EditInstrumentGalleryComponent } from './edit-instrument-gallery/edit-instrument-gallery.component';
import { EditActivityComponent } from './edit-activity/edit-activity.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GalleryComponent, ManageInstrumentGalleryComponent, ManageVideoComponent, ManageActivityComponent, AddoreditActivityComponent, AddoreditInstrumentGalleryComponent, AddoreditVideoComponent, EditVideoComponent, EditInstrumentGalleryComponent, EditActivityComponent],
  imports: [
    CommonModule,
    SharedModule,
    GalleryRoutingModule,
    FormsModule
  ]
})
export class GalleryModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddoreditActivityComponent } from './addoredit-activity/addoredit-activity.component';
import { AddoreditInstrumentGalleryComponent } from './addoredit-instrument-gallery/addoredit-instrument-gallery.component';
import { AddoreditVideoComponent } from './addoredit-video/addoredit-video.component';
import { EditActivityComponent } from './edit-activity/edit-activity.component';
import { EditInstrumentGalleryComponent } from './edit-instrument-gallery/edit-instrument-gallery.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { GalleryComponent } from './gallery.component';
import { ManageActivityComponent } from './manage-activity/manage-activity.component';
import { ManageInstrumentGalleryComponent } from './manage-instrument-gallery/manage-instrument-gallery.component';
import { ManageVideoComponent } from './manage-video/manage-video.component';

const routes: Routes = [
  {
    path : '',
    component : GalleryComponent
  },
  {
    path : 'manage-instrument-gallery',
   component : ManageInstrumentGalleryComponent
  },
  {
    path : 'manage-video',
    component : ManageVideoComponent
  },
  {
    path : 'manage-activity',
    component : ManageActivityComponent
  },
  {
    path : 'add-activity',
    component : AddoreditActivityComponent
  },
  {path : 'add-instrument-gallery',
component : AddoreditInstrumentGalleryComponent
},
{path : 'add-video',
component : AddoreditVideoComponent
},
{path : 'edit-video',
component : EditVideoComponent
},
{path : 'edit-activity',
component : EditActivityComponent
},
{path : 'edit-instrument-gallery',
component : EditInstrumentGalleryComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }

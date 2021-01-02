import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { SharedModule } from '../shared/shared.module';
import { ManageEnqueryComponent } from './manage-enquery/manage-enquery.component';
import { ManageAdmissionComponent } from './manage-admission/manage-admission.component';
import { AddoreditAdmissionComponent } from './addoredit-admission/addoredit-admission.component';
import { AddoreditEnqueryComponent } from './addoredit-enquery/addoredit-enquery.component';
import { EditAdmissionComponent } from './edit-admission/edit-admission.component';
import { EditEnqueryComponent } from './edit-enquery/edit-enquery.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EventComponent, ManageEnqueryComponent, ManageAdmissionComponent, AddoreditAdmissionComponent, AddoreditEnqueryComponent, EditAdmissionComponent, EditEnqueryComponent, ],
  imports: [
    CommonModule,
    SharedModule,
    EventRoutingModule,
    FormsModule
  ]
})
export class EventModule { }

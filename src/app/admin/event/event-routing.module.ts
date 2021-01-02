import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddoreditAdmissionComponent } from './addoredit-admission/addoredit-admission.component';
import { AddoreditEnqueryComponent } from './addoredit-enquery/addoredit-enquery.component';
import { EventComponent } from './event.component';
import { ManageAdmissionComponent } from './manage-admission/manage-admission.component';
import { ManageEnqueryComponent } from './manage-enquery/manage-enquery.component';

const routes: Routes = [
  {
    path : '',
    component : EventComponent
  },
  {
    path : 'manage-enquery',
    component : ManageEnqueryComponent
  },
  {
    path : 'manage-admission',
    component : ManageAdmissionComponent
  },
  {
    path: 'add-admission',
    component : AddoreditAdmissionComponent
  },
  {
    path : 'add-enquery',
    component : AddoreditEnqueryComponent
  },
  {
    path : 'edit-admission',
    component : ManageAdmissionComponent
  },
  {
    path : 'edit-enquery',
    component : ManageEnqueryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGymDetailsComponent } from './add-gym-details/add-gym-details.component';
import { AddoreditInitialInvestmentComponent } from './addoredit-initial-investment/addoredit-initial-investment.component';
import { AddoreditOwnerComponent } from './addoredit-owner/addoredit-owner.component';
import { AddoreditStaffComponent } from './addoredit-staff/addoredit-staff.component';
import { EditGymDetailsComponent } from './edit-gym-details/edit-gym-details.component';
import { EditInitialInvestmentComponent } from './edit-initial-investment/edit-initial-investment.component';
import { EditOwnerComponent } from './edit-owner/edit-owner.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { GymdetailsComponent } from './gymdetails.component';
import { ManageInitialInvestmentComponent } from './manage-initial-investment/manage-initial-investment.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { ManagegymdetailsComponent } from './managegymdetails/managegymdetails.component';
import { ManageownerComponent } from './manageowner/manageowner.component';

const routes: Routes = [ 
  {path : '',
  component : GymdetailsComponent
},
{
  path : 'manage-gym-details',
 component : ManagegymdetailsComponent
},
{
  path : 'manage-owner' ,
  component : ManageownerComponent
},
{
  path : 'manage-initial-investment' ,
  component : ManageInitialInvestmentComponent
},
{
  path : 'manage-staff' ,
  component : ManageStaffComponent
},
{
  path : 'add-gym-details',
  component : AddGymDetailsComponent
},

{
  path : 'add-initial-investment',
  component : AddoreditInitialInvestmentComponent
},
{
  path : 'add-staff',
  component :AddoreditStaffComponent
},
{path : 'add-owner',
component : AddoreditOwnerComponent
},
{path : 'edit-owner',
component : EditOwnerComponent
},
{path : 'edit-gym-details',
component : EditGymDetailsComponent
},
{path : 'edit-initial-investment',
component : EditInitialInvestmentComponent
},
{
  path: 'edit-staff',
  component : EditStaffComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GymdetailsRoutingModule { }

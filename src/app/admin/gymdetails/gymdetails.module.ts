import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymdetailsRoutingModule } from './gymdetails-routing.module';
import { GymdetailsComponent } from './gymdetails.component';
import { SharedModule } from '../shared/shared.module';
import { ManagegymdetailsComponent } from './managegymdetails/managegymdetails.component';
import { ManageownerComponent } from './manageowner/manageowner.component';
import { ManageInitialInvestmentComponent } from './manage-initial-investment/manage-initial-investment.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';

import { AddoreditInitialInvestmentComponent } from './addoredit-initial-investment/addoredit-initial-investment.component';
import { AddoreditStaffComponent } from './addoredit-staff/addoredit-staff.component';
import { AddoreditOwnerComponent } from './addoredit-owner/addoredit-owner.component';
import { EditGymDetailsComponent } from './edit-gym-details/edit-gym-details.component';
import { EditInitialInvestmentComponent } from './edit-initial-investment/edit-initial-investment.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { EditOwnerComponent } from './edit-owner/edit-owner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddGymDetailsComponent } from './add-gym-details/add-gym-details.component';

@NgModule({
  declarations: [GymdetailsComponent,
     ManagegymdetailsComponent,
      ManageownerComponent,
       ManageInitialInvestmentComponent,
        ManageStaffComponent, 
        
         AddoreditInitialInvestmentComponent,
          AddoreditStaffComponent,
           AddoreditOwnerComponent,
            EditGymDetailsComponent,
             EditInitialInvestmentComponent,
              EditStaffComponent,
               EditOwnerComponent,
               AddGymDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    GymdetailsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ]
})
export class GymdetailsModule { }

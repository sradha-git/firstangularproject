import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './admin/shared/shared.module';
import { AddGymDetailsService } from './admin/shared/add-gym-details.service';
import { InitialInvestmentService } from './admin/shared/initial-investment.service';
import { FitnessCategoryService } from './admin/shared/fitness-category.service';
import { AddPersonalTrainingService } from './admin/shared/add-personal-training.service';
import { AdmissionService } from './admin/shared/admission.service';
import { EnqueryService } from './admin/shared/enquery.service';
import { ActivityService } from './admin/shared/activity.service';
import { InstrumentGalleryService } from './admin/shared/instrument-gallery.service';
import { VideoService } from './admin/shared/video.service';
import { OwnerDetailsService } from './admin/shared/owner-details.service';
import { StaffService } from './admin/shared/staff.service';



@NgModule({
  declarations: [
    AppComponent,
  
    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
   
  ],
  providers: [AddGymDetailsService,
    InitialInvestmentService,
    OwnerDetailsService,
    StaffService,
    FitnessCategoryService,
    AddPersonalTrainingService,
    AdmissionService,
    EnqueryService,
    ActivityService,
    InstrumentGalleryService,
    VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitnessRoutingModule } from './fitness-routing.module';
import { FitnessComponent } from './fitness.component';
import { SharedModule } from '../shared/shared.module';
import { ManageFitnessCategoryComponent } from './manage-fitness-category/manage-fitness-category.component';
import { ManagePersonalTrainingComponent } from './manage-personal-training/manage-personal-training.component';
import { AddoreditPersonalTrainingComponent } from './addoredit-personal-training/addoredit-personal-training.component';
import { EditFitnessCategoryComponent } from './edit-fitness-category/edit-fitness-category.component';
import { EditPersonalTrainingComponent } from './edit-personal-training/edit-personal-training.component';
import { AddFitnessCategoryComponent } from './add-fitness-category/add-fitness-category.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FitnessComponent, ManageFitnessCategoryComponent, ManagePersonalTrainingComponent, AddoreditPersonalTrainingComponent, EditFitnessCategoryComponent, EditPersonalTrainingComponent, AddFitnessCategoryComponent],
  imports: [
    CommonModule,
    SharedModule,
    FitnessRoutingModule,
    FormsModule
  ]
})
export class FitnessModule { }

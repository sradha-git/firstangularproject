import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFitnessCategoryComponent } from './add-fitness-category/add-fitness-category.component';


import { AddoreditPersonalTrainingComponent } from './addoredit-personal-training/addoredit-personal-training.component';
import { FitnessComponent } from './fitness.component';
import { ManageFitnessCategoryComponent } from './manage-fitness-category/manage-fitness-category.component';
import { ManagePersonalTrainingComponent } from './manage-personal-training/manage-personal-training.component';

const routes: Routes = [ 
  {path : '',
  component : FitnessComponent
},
{
  path : 'manage-fitness-category' ,
  component : ManageFitnessCategoryComponent
},
{
  path : 'manage-personal-training' ,
  component : ManagePersonalTrainingComponent
},
{
  path :'add-fitness-category' ,
  component : AddFitnessCategoryComponent
},

{path : 'add-personal-training',
component : AddoreditPersonalTrainingComponent},
{path : 'edit-personal-training',
component : ManagePersonalTrainingComponent},
{path : 'edit-fitness-category',
component : ManageFitnessCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FitnessRoutingModule { }

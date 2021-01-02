import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageNutritionCategoryComponent } from './manage-nutrition-category/manage-nutrition-category.component';
import { ManageNutritionDetailsComponent } from './manage-nutrition-details/manage-nutrition-details.component';
import { ManageVendorComponent } from './manage-vendor/manage-vendor.component';
import { NutritionComponent } from './nutrition.component';

const routes: Routes = [
  {path : '',
  component : NutritionComponent
},
{
  path : 'manage-vendor' ,
  component : ManageVendorComponent
},
{
  path : 'manage-nutrition-category' ,
  component : ManageNutritionCategoryComponent
},
{
  path : 'manage-nutrition-details',
  component : ManageNutritionDetailsComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutritionRoutingModule { }

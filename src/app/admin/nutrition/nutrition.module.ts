import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutritionRoutingModule } from './nutrition-routing.module';
import { NutritionComponent } from './nutrition.component';
import { SharedModule } from '../shared/shared.module';
import { ManageVendorComponent } from './manage-vendor/manage-vendor.component';
import { ManageNutritionCategoryComponent } from './manage-nutrition-category/manage-nutrition-category.component';
import { ManageNutritionDetailsComponent } from './manage-nutrition-details/manage-nutrition-details.component';

@NgModule({
  declarations: [NutritionComponent, ManageVendorComponent, ManageNutritionCategoryComponent, ManageNutritionDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    NutritionRoutingModule
  ]
})
export class NutritionModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageDetailsRoutingModule } from './package-details-routing.module';
import { PackageDetailsComponent } from './package-details.component';
import { SharedModule } from '../shared/shared.module';
import { ManagePackageDetailsComponent } from './manage-package-details/manage-package-details.component';

@NgModule({
  declarations: [PackageDetailsComponent, ManagePackageDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    PackageDetailsRoutingModule
  ]
})
export class PackageDetailsModule { }

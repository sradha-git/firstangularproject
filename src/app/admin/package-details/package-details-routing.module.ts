import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagePackageDetailsComponent } from './manage-package-details/manage-package-details.component';
import { PackageDetailsComponent } from './package-details.component';

const routes: Routes = [
  {
    path : '',
    component : PackageDetailsComponent
  },
  {
    path : 'manage-package',
    component : ManagePackageDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackageDetailsRoutingModule { }

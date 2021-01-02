import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'menus',
    loadChildren: () => import('./menus/menus.module').then(m => m.MenusModule)
  },
  {
    path: 'mailbox',
    loadChildren: () => import('./mailbox/mailbox.module').then(m => m.MailboxModule)
  },
  {
    path: 'gym',
    loadChildren: () => import('./gymdetails/gymdetails.module').then(m => m.GymdetailsModule)
  },
  {
  path: 'package',
  loadChildren: () => import('./package-details/package-details.module').then(m => m.PackageDetailsModule)
},
{
  path: 'fitness',
  loadChildren: () => import('./fitness/fitness.module').then(m => m.FitnessModule)
},
{
  path: 'nutrition',
  loadChildren: () => import('./nutrition/nutrition.module').then(m => m.NutritionModule)
},
{
  path: 'event',
  loadChildren: () => import('./event/event.module').then(m => m.EventModule)
},
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule)
  },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

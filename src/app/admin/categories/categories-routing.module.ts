import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent
  },
  {
    path: 'add',
    component: AddCategoryComponent
  },
  {
    path: 'edit/:id',
    component: EditCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }

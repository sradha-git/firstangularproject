import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { SharedModule } from '../shared/shared.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
@NgModule({
  declarations: [CategoriesComponent, AddCategoryComponent, EditCategoryComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class CategoriesModule { }

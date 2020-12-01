import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenusComponent } from './menus.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';
const routes: Routes = [
  {
    path: '',
    component: MenusComponent
  },
  {
    path: 'create-menu',
    component: CreateMenuComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenusRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenusRoutingModule } from './menus-routing.module';
import { MenusComponent } from './menus.component';
import { SharedModule } from '../shared/shared.module';
import { CreateMenuComponent } from './create-menu/create-menu.component';
@NgModule({
  declarations: [MenusComponent,CreateMenuComponent],
  imports: [
    CommonModule,
    MenusRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class MenusModule { }

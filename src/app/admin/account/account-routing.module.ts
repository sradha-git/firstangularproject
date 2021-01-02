import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { AddoreditExpenditureComponent } from './addoredit-expenditure/addoredit-expenditure.component';
import { AddoreditIncomeComponent } from './addoredit-income/addoredit-income.component';
import { AddoreditSalaryComponent } from './addoredit-salary/addoredit-salary.component';
import { ManageExpenditureComponent } from './manage-expenditure/manage-expenditure.component';
import { ManageIncomeComponent } from './manage-income/manage-income.component';
import { ManageSalaryComponent } from './manage-salary/manage-salary.component';

const routes: Routes = [
  {
    path : '',
    component : AccountComponent
  },
  {
    path : 'manage-income',
    component : ManageIncomeComponent
  },
  {
    path : 'manage-expenditure',
    component : ManageExpenditureComponent
  },
  {
    path : 'manage-salary',
    component : ManageSalaryComponent
  },
  {
    path : 'addoredit-expenditure',
    component : AddoreditExpenditureComponent
  },
  {
    path : 'addoredit-income',
    component : AddoreditIncomeComponent
  },
  {
    path : 'addoredit-salary',
    component : AddoreditSalaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

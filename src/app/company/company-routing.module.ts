import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{CompanyDataTableComponent} from '../company/company-data-table/company-data-table.component'
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: CompanyDataTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }

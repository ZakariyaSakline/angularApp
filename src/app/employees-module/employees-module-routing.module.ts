import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EmployeesDataTableComponent} from'./employees-data-table/employees-data-table.component';
import {HttpCallComponent} from './http-call/http-call.component';

const routes: Routes = [
  
  {
    path: '',
    component: EmployeesDataTableComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'call', component: HttpCallComponent },
        
        ]
      }
    ]   
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesModuleRoutingModule { }

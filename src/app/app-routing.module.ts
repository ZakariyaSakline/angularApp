import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'employees',
    loadChildren:'./employees-module/employees-module.module#EmployeesModuleModule'
  },
  {
    path:'company',
    loadChildren:'./company/company.module#CompanyModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

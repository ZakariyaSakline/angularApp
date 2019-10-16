import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesModuleRoutingModule } from './employees-module-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeesDataTableComponent } from './employees-data-table/employees-data-table.component';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatButtonModule,
  MatInputModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatBadgeModule
 
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpCallComponent} from './http-call/http-call.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AddEmployeeComponent,
    EmployeesDataTableComponent,
    EditEmployeeComponent,
    HttpCallComponent
  ],
  entryComponents: [AddEmployeeComponent,EditEmployeeComponent],

  imports: [
    CommonModule,
    EmployeesModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
        apiKey:'AIzaSyCfZEAEZvjDqr76f_hcDvzaRvOyskvGVX4'
    }),
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatBadgeModule
  ]
})
export class EmployeesModuleModule { 
  constructor() {
    console.log('Employees module working');
  }
}

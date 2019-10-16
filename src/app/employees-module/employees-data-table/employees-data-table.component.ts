import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{AddEmployeeComponent} from '../add-employee/add-employee.component'
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatPaginator} from '@angular/material';
import{ShareDataService} from '../../share-data.service';
import { from } from 'rxjs';
import{EditEmployeeComponent} from '../edit-employee/edit-employee.component'
import{PassDAtaService} from '../../pass-data.service';


@Component({
  selector: 'app-employees-data-table',
  templateUrl: './employees-data-table.component.html',
  styleUrls: ['./employees-data-table.component.css']

})
export class EmployeesDataTableComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private _shareDataService:ShareDataService,
    private _passDAtaService:PassDAtaService
  ) { }

  jasonData;
  displayedColumns;
  dataSource;
  employeeInfo;


 @ViewChild(MatSort) sort: MatSort;
 @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit() {
    this._passDAtaService.getTableUpdateEvent().subscribe(newData => {
      this.reloadTableForEditEvent(newData);
    });
    this._passDAtaService.getTableUpdateRowEvent().subscribe(newEmployeeInfo => {
      this.reloadTableForAddRowEvent(newEmployeeInfo);
    });

    this.jasonData= this._shareDataService.getLocalEmployee();
    this.displayedColumns= ['employeeId','employeeImage', 'employeeName', 'companyName','employeeAge','employeeAddress', 'employeeEdit','employeeDelete'];
    this.dataSource = new MatTableDataSource(this.jasonData);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;


  }
  openAddEmployeeDialog(): void {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      width: '800px',height:'700px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The AddEmployee dialog was closed');
     
    });
  }
// for editEmployee dialog
  openEditEmployeeDialog(employeeInfo): void {
    const dialogRef = this.dialog.open(EditEmployeeComponent, {
      data: employeeInfo,
      width: '800px',height:'700px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The EditEmployee dialog was closed');
     
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


    confirmDeleteEmployee(element) {
        if (confirm("Are you sure?")) {
           this.deleteEmployee(element);
        } else {
         
        }
      }
    
  deleteEmployee(element):any{

    let dataTable=this.jasonData;
      for(let i=0; i<dataTable.length; i++){

        if(dataTable[i].employeeId == element.employeeId){
            let indexValue=dataTable.indexOf(dataTable[i]);
            dataTable.splice(indexValue ,1);
              this.dataSource = new MatTableDataSource(this.jasonData);
              localStorage.setItem("employees" , JSON.stringify(dataTable));
      }
    }

   return this.jasonData;

  }

  // getEditEmployeeValue(employeeInfo){
  //   let dialogRef = this.dialog.open(EditEmployeeComponent, {
  //     data: employeeInfo,
  //   });
  // }
  

  reloadTableForEditEvent(newData){
        for(let i=0; i<this.jasonData.length; i++){
          if(this.jasonData[i].employeeId ==  newData.employeeId ){
            this.jasonData[i] =  newData;
              // let indexValue=localData.indexOf(localData[i]);
              // localData. splice(indexValue ,1, this.afterUpdateValue(signupForm));
            }
        }
        this.jasonData= this._shareDataService.getLocalEmployee();
        this.displayedColumns= ['employeeId','employeeImage', 'employeeName', 'companyName', 'employeeAge','employeeAddress', 'employeeEdit','employeeDelete'];
        this.dataSource = new MatTableDataSource(this.jasonData);
      }

  reloadTableForAddRowEvent(newEmployeeInfo){
        this.jasonData=newEmployeeInfo;
        this.displayedColumns= ['employeeId','employeeImage', 'employeeName', 'companyName', 'employeeAge','employeeAddress', 'employeeEdit','employeeDelete'];
        this.dataSource = new MatTableDataSource(this.jasonData);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }    

}

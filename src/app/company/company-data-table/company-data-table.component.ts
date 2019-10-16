import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatPaginator} from '@angular/material';
import{ShareDataService} from '../../share-data.service';
import{AddCompanyComponent} from'../add-company/add-company.component';
import{PassDAtaService} from '../../pass-data.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-company-data-table',
  templateUrl: './company-data-table.component.html',
  styleUrls: ['./company-data-table.component.css']
})
export class CompanyDataTableComponent implements OnInit {

  jasonData;
  displayedColumns;
  dataSource;
  companyTableData;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private _shareDataService:ShareDataService,
    public dialog: MatDialog,
    private _passDAtaService:PassDAtaService,
  ) { }

  ngOnInit() {
    this._passDAtaService.getCompanyTableUpdateRowEvent().subscribe(newCompanyInfo => {
      this.reloadCompanyTableForAddRowEvent(newCompanyInfo);
    });

    this.jasonData= this._shareDataService.getLocalcompany();
    this.displayedColumns= ['companyId','companyImage', 'companyName', 'companyAddress','companyEdit', 'companyDelete'];
    this.dataSource = new MatTableDataSource(this.jasonData);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  openAddCompanyDialog(): void {
    const dialogRef = this.dialog.open(AddCompanyComponent, {
      width: '800px',height:'700px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The AddEmployee dialog was closed');
     
    });
  }

  reloadCompanyTableForAddRowEvent(newCompanyInfo){
    this.jasonData=newCompanyInfo;
    this.displayedColumns= ['companyId','companyImage', 'companyName', 'companyAddress','companyEdit', 'companyDelete'];
    this.dataSource = new MatTableDataSource(this.jasonData);
  }  




}

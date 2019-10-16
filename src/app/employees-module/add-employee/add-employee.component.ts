import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, NgForm } from '@angular/forms';
import{ShareDataService} from '../../share-data.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{PassDAtaService} from '../../pass-data.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  input;
  signupForm: FormGroup;
// for input company name option
  options: string[] = this._shareDataService.getLocalcompany();

  constructor(
    private formbilder: FormBuilder,
    private _shareDataService: ShareDataService,
    private _passDAtaService:PassDAtaService,
    public dialogRef: MatDialogRef<AddEmployeeComponent>,
    private _snackBar: MatSnackBar
  ) { }

  getEmployeeData(): void {
    debugger;
    this.signupForm = this.formbilder.group({
      employeeId: ['', Validators.required],
      employeeName: ['', Validators.required],
      companyName: ['', Validators.required],
      employeeAge: ['', Validators.required],
      employeeAddress: ['', Validators.required],
      employeeImage: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getEmployeeData();
  }

  employeeSubmit(signupForm: any): any {
    this.addEmployeeData(signupForm);
    // this.resetFrom();
  }
  addEmployeeData(signupForm: any): any {
      this.input= this._shareDataService.getLocalEmployee();
      let data = {
        'employeeId': signupForm.controls.employeeId.value,
        'employeeName': signupForm.controls.employeeName.value,
        'companyName': signupForm.controls.companyName.value,
        'employeeAge': signupForm.controls.employeeAge.value,
        'employeeAddress': signupForm.controls.employeeAddress.value,
        'employeeImage': signupForm.controls.employeeImage.value
        }
      this.input.push(data);
      this._passDAtaService.emitTableUpdateRowEvent(this.input);
      localStorage.setItem('employees', JSON.stringify(this.input));
  }

  // resetFrom(): any {
  //   this.signupForm.patchValue({
  //     employeeId: '',
  //     employeeName: '',
  //     employeeAge: '',
  //     employeeAddress: '',
  //     employeeImage: ''
  //   });
  // }
  // for snackbar
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


}

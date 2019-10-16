import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassDAtaService {

  constructor() { }



  tableupdate: EventEmitter<any> = new EventEmitter();
  tableupdateRow: EventEmitter<any> = new EventEmitter();
  companytableupdateRow: EventEmitter<any> = new EventEmitter();


  emitTableUpdateEvent(employeeInfo: any) {
    this.tableupdate.emit(employeeInfo);
  }

  getTableUpdateEvent() {
    return this.tableupdate;
  }


  emitTableUpdateRowEvent(input:any){
    this.tableupdateRow.emit(input);
  }
  getTableUpdateRowEvent() {
    return this.tableupdateRow;
  }


  emitCompanyTableUpdateRowEvent(companyInfo:any){
    this.companytableupdateRow.emit(companyInfo);
  }
  getCompanyTableUpdateRowEvent() {
    return this.companytableupdateRow;
  }


}

import { Component, OnInit } from '@angular/core';
import { RecordsService } from "../../services/records.service"; // Importing Records Service

@Component({
  selector: 'app-employeeinfo',
  templateUrl: './employeeinfo.component.html',
  styleUrls: ['./employeeinfo.component.css'],
  providers: [RecordsService] // Registering the Records service
})
export class EmployeeinfoComponent implements OnInit {

  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];

  // These custom built methods will retrieve the data and will
  // add them to each of the corresponding infoReceived arrays

  getInfoFromServiceClass1() {
    this.infoReceived1 = this.rservice.getinfo1()
  }
  getInfoFromServiceClass2() {
    this.infoReceived2 = this.rservice.getinfo2()
  }
  getInfoFromServiceClass3() {
    this.infoReceived3 = this.rservice.getinfo3()
  }

  // Dependency Injection: Injecting the RecordsService class into 
  // the EmployeeinfoComponent class

  constructor(private rservice: RecordsService) { }

  ngOnInit(): void {
  }

}

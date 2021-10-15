import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrls: ['./employee-information.component.css'],
  providers: [DataService]    // Registering the Data Service in this component 
})
export class EmployeeInformationComponent implements OnInit {

  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];

  // This method calls the getInfo1() method from the
  // DataService, which returns the information of the 
  // fist employee in that service. Then that information
  // gets stored in the infoReceived1 array. 

  getInfoFromService1() {
    this.infoReceived1 = this.dservice.getInfo1()
  }
  getInfoFromService2() {
    this.infoReceived2 = this.dservice.getInfo2()
  }
  getInfoFromService3() {
    this.infoReceived3 = this.dservice.getInfo3()
  }

  // Dependency Injection: Injecting the DataService class into 
  // the EmployeeInformationComponent class

  constructor(private dservice: DataService) { }

  ngOnInit(): void {
  }

  updateInfo(frm: any) {
    this.dservice.addInfo(frm.value.location)
  }

}

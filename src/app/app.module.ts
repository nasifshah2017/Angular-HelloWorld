import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TextcomponentComponent } from './components/textcomponent/textcomponent.component';
import { ImagecomponentComponent } from './components/imagecomponent/imagecomponent.component';
import { EmployeeinfoComponent } from './components/employeeinfo/employeeinfo.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { EmployeeInformationComponent } from './components/employee-information/employee-information.component';

@NgModule({
  declarations: [
    AppComponent,
    TextcomponentComponent,
    ImagecomponentComponent,
    EmployeeinfoComponent,
    FormComponentComponent,
    EmployeeInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

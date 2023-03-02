import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test3Component } from './test3/test3.component';
import { FormsModule } from '@angular/forms';
import { Test4Component } from './test4/test4.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { Test4DetailComponent } from './test4-detail/test4-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    Test3Component,
    Test4Component,
    PatientDetailComponent,
    PatientListComponent,
    Test4DetailComponent
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { PatientComponent } from './components/patient/patient.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctorComponent } from './components/doctor/doctor.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    WelcomeComponent,
    AdminhomeComponent,
    PatientComponent,
    DoctorComponent,
    MedicineComponent,
    AppointmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

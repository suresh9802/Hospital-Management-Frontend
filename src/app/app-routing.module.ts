import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { PatientComponent } from './components/patient/patient.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';

const routes: Routes = [{path:'',component:WelcomeComponent},
  {path:'adminregurl',component:AdminComponent},
{path:'adminhomeurl',component:AdminhomeComponent},
{path:'patienturl',component:PatientComponent},
{path:'doctorurl',component:DoctorComponent},
{path:'medicineurl',component:MedicineComponent},
{path:'appointmenturl',component:AppointmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

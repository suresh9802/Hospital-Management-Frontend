import { Component } from '@angular/core';
import { PatientLoginService } from '../../service/patient-login.service';
import { Patient } from '../../model/patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-login',
  standalone: false,
  templateUrl: './patient-login.component.html',
  styleUrl: './patient-login.component.css'
})
export class PatientLoginComponent {

  constructor(private patientLoginService:PatientLoginService,private router:Router){}
  patient = new Patient();
  flag:boolean=false;
  patientLogin(){
    this.flag=this.patientLoginService.patientLogin(this.patient.username,this.patient.password);
    if(this.flag)
    {
      this.router.navigate(['patienthomeurl']);
    }else{
      alert("login failed invalid credential");
    }
  }

}


  

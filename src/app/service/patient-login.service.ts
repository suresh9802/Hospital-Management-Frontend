import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientLoginService {

  constructor() { }

  patientLogin(username:any,password:any)
  {
    if(username=="aaa" && password=="111")
    {
      return true;
    }else
    return false;
  }
}

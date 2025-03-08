import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorLoginService {

  constructor() { }

  doctorLogin(username:any, password:any) 
  {
    if(username=="zzz" && password=="111")
    {
      return true;
    }else{
      return false;
    }
    
  }
}

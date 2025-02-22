import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient:HttpClient) { }

  private baseurl="http://localhost:8080/api/appointment"

  getAppointmentList():Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseurl}`)
  }
}

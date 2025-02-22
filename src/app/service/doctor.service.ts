import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../model/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private httpClient: HttpClient ) { }

  private baseurl="http://localhost:8080/api/doctor"

  getDoctorList():Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${this.baseurl}`)
  }
}

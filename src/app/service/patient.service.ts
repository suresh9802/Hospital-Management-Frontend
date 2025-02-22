import { Injectable } from '@angular/core';
import { Patient } from '../model/patient';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

 
  constructor(private httpClient: HttpClient) {}

   private baseUrl="http://localhost:8080/api/patient"
  // ✅ Ensure this method exists
  getPatientList(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`)
}

}

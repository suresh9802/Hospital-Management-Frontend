import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from '../model/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient:HttpClient) { }

  private baseurl="http://localhost:8080/api/medicine"

  getMedicineList():Observable<Medicine[]> {
    return this.httpClient.get<Medicine[]>(`${this.baseurl}`)
  }
}

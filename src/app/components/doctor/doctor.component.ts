import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../model/doctor';
import { DoctorService } from '../../service/doctor.service';

@Component({
  selector: 'app-doctor',
  standalone: false,
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent implements OnInit {

  doctors : Doctor[] = [];

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.getDoctorsList();
  }

  getDoctorsList():void {
    this.doctorService.getDoctorList().subscribe((data:Doctor[])=>{
      this.doctors=data;
    });
  }

}

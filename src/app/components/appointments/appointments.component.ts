import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../service/appointment.service';
import { Appointment } from '../../model/appointment';

@Component({
  selector: 'app-appointments',
  standalone: false,
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent implements OnInit {

  appointments: Appointment[]=[];

  constructor(private appointmentService:AppointmentService) {}

  ngOnInit(): void {
    this.getAppointmentList();
  }

  getAppointmentList():void {
    this.appointmentService.getAppointmentList().subscribe((data:Appointment[]) =>{
      this.appointments=data;
    });
  }

}

import { Component } from '@angular/core';
import { Appointment } from '../../model/appointment';
import { AppointmentService } from '../../service/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-appointments',
  standalone: false,
  templateUrl: './add-appointments.component.html',
  styleUrl: './add-appointments.component.css'
})
export class AddAppointmentsComponent {

  appointments:Appointment = new Appointment();

  constructor(private appointmentService:AppointmentService,private router:Router) {}

  onSubmit() {
    console.log(this.appointments);
    this.appointmentService.addAppointments(this.appointments).subscribe(data =>{
      console.log(data);
      this.router.navigate(['appointmenturl']);
    })

  }

}

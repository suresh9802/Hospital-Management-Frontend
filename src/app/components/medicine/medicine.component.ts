import { Component, OnInit } from '@angular/core';
import { Medicine } from '../../model/medicine';
import { MedicineService } from '../../service/medicine.service';

@Component({
  selector: 'app-medicine',
  standalone: false,
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.css'
})
export class MedicineComponent implements OnInit {

  medicines: Medicine[]=[];

  constructor(private medicineService:MedicineService){}

  ngOnInit(): void {
    this.getMedicineList();
  }

  getMedicineList():void{
    this.medicineService.getMedicineList().subscribe((data:Medicine[])=>{
      this.medicines=data;
    });
  }

}

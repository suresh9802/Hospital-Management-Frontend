import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createdocacc',
  standalone: false,
  templateUrl: './createdocacc.component.html',
  styleUrl: './createdocacc.component.css'
})
export class CreatedocaccComponent {

  patientForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
    this.patientForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      gender: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  registerPatient() {
    if (this.patientForm.valid) {
      this.httpClient.post('http://localhost:8080/api/patient', this.patientForm.value).subscribe(
        (response: any) => {
          this.successMessage = response.message;
          this.errorMessage = '';
          this.patientForm.reset();
        },
        (error) => {
          this.successMessage = '';
          this.errorMessage = error.error.error;
        }
      );
    }
  }



}

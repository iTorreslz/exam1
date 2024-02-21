import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EMPLOYEE_LIST, Employee } from '../../employee';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ex11',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  template: `
    <div>
    <h1 class="text-3xl font-bold mb-4">Create new employee</h1>
      <form [formGroup]="applyForm" (submit)="submitForm()">
        <label for="name">Name</label>
        <input id="name" type="text" formControlName="name" [class.error]="applyForm.get('name')?.invalid && applyForm.get('name')?.touched">

        <label for="position">Position</label>
        <input id="position" type="text" formControlName="position" [class.error]="applyForm.get('position')?.invalid && applyForm.get('position')?.touched">

        <label for="salary">Salary</label>
        <input id="salary" type="number" formControlName="salary" [class.error]="applyForm.get('salary')?.invalid && applyForm.get('salary')?.touched">
        
        <label for="residence">Residence</label>
        <input id="residence" type="text" formControlName="residence" [class.error]="applyForm.get('residence')?.invalid && applyForm.get('residence')?.touched">

        <button type="submit" class="primary">Apply now</button>
      </form>
    </div>
  `,
  styleUrl: './ex11.component.css'
})
export class Ex11Component {

  newEmployeeList = [...EMPLOYEE_LIST];

  applyForm = new FormGroup({
    name: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
    residence: new FormControl('', Validators.required)
  });
  
  constructor() { }

  submitForm() {

    // En caso de no ser válido...
    if (this.applyForm.invalid) {
      return;
    }

    // En caso de ser válido...
    this.newEmployeeList.push({
      name: this.applyForm.value.name || "",
      position: this.applyForm.value.position || "",
      salary: Number(this.applyForm.value.salary) || 0,
      residence: this.applyForm.value.residence || "",
    });

    // Prueba de adición
    console.log(this.newEmployeeList);
  }
}

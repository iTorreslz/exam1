import { Component } from '@angular/core';
import { Employee } from "../../employee";
import { EMPLOYEE_LIST } from "../../employee";
import { NgForOf } from "@angular/common";
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex09',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
  ],
  templateUrl: './ex09.component.html'
})
export class Ex09Component {
  order: string = '';
  mode: string = '';
  employees: Employee[] = [];

  constructor() { }

  onSubmit(): void {
    const orderValue = this.order;
    const modeValue = this.mode;

    if (modeValue == "asc") {
      if (orderValue == "name") {
        this.employees.sort((a, b) => a.name.localeCompare(b.name));
      } else if (orderValue == "position") {
        this.employees.sort((a, b) => a.position.localeCompare(b.position));
      } else if (orderValue == "salary") {
        this.employees.sort((a, b) => (a.salary as number) - (b.salary as number));
      }
    } else if (modeValue == "desc") {
      if (orderValue == "name") {
        this.employees.sort((a, b) => b.name.localeCompare(a.name));
      } else if (orderValue == "position") {
        this.employees.sort((a, b) => b.position.localeCompare(a.position));
      } else if (orderValue == "salary") {
        this.employees.sort((a, b) => (b.salary as number) - (a.salary as number));
      }
    }
  }

  ngOnInit(): void {
    this.employees = EMPLOYEE_LIST;
  }
}

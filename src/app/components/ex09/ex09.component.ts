import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { Employee, EMPLOYEE_LIST } from "../../employee";
import { NgForOf } from "@angular/common";
import { FormsModule, NgForm } from '@angular/forms';
import { Ex11Component } from '../ex11/ex11.component';

@Component({
  selector: 'app-ex09',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    Ex11Component
  ],
  templateUrl: './ex09.component.html'
})
export class Ex09Component implements AfterViewInit {

  order: string = '';
  mode: string = '';
  employees: Employee[] = [];

  @ViewChild(Ex11Component) form: any;

  constructor() { }

  newEmployeeList: Employee[] | undefined;

  ngAfterViewInit() {
    this.newEmployeeList = this.form.newEmployeeList;
  }

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
    if (this.newEmployeeList) {
      this.employees = this.form.newEmployeeList;
    } else {
      alert(this.newEmployeeList)
      this.employees = EMPLOYEE_LIST;
    }
  }
  
}

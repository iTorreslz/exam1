import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-ex06',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './ex06.component.html',
  styles: `
  .ng-invalid {
  background: red;
  }
  `
})
export class Ex06Component {
  celcius: number | null = null;
  fahrenheit: number | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  clear() {
    this.celcius = 0;
    this.fahrenheit = 0;
  }

  convertToCelcius() {
    if (this.fahrenheit !== null) {
      this.celcius = (this.fahrenheit - 32) * 5 / 9;
    }
  }

  converToFahrenheit() {
    if (this.celcius !== null) {
      this.fahrenheit = this.celcius * 9 / 5 + 32;
    }
  }

  onlyNumbers(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
      event.target.classList.add('ng-invalid');
    } else {
      event.target.classList.remove('ng-invalid');
    }
  }
}

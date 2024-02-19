import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex03',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h1>Exercice 3</h1>
  <p>
    Random between 1 and 10: <span [ngClass]="{'red': fail, 'green': success, 'blue': a}">{{ n }}</span>
  </p>
  `,
  styleUrl: './ex03.component.css'
})
export class Ex03Component {
  n: number = 0;
  success: boolean = false;
  fail: boolean = false;
  a: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.n = Math.floor(Math.random() * 10 + 1);
    this.success = this.n >= 5 && this.n < 9;
    this.fail = this.n < 5;
    this.a = this.n >= 9;
  }
}

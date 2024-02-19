import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-ex07',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './ex07.component.html'
})
export class Ex07Component {
  numbers: number[] = [];
  numbersString: String = "";
  fruits: string[] = [];
  fruitsString: String = "";

  constructor() { }

  ngOnInit(): void {
    this.numbers = [1, 5, 8, 24, 32, 11, 55];
    this.fruits = ["pear", "apple", "mango", "watermelon", "kiwi"];

    this.numbers.sort((a, b) => a - b);
    this.numbersString = this.numbers.join(', ');

    this.fruits.sort();
    this.fruitsString = this.fruits.join(', ');
  }
}

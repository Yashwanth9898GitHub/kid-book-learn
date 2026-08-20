import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-math',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './math.html',
  styleUrls: ['./math.css']
})
export class Math {
  num1: number = 0;
  num2: number = 0;
  result: number | string = '';
  numbers: number[] = Array.from({ length: 10 }, (_, i) => i + 1); 

  add() {
    this.result = this.num1 + this.num2;
  }

  subtract() {
    this.result = this.num1 - this.num2;
  }

  multiply() {
    this.result = this.num1 * this.num2;
  }

  divide() {
    if (this.num2 === 0) {
      this.result = 'Cannot divide by zero';
    } else {
      this.result = this.num1 / this.num2;
    }
  }
}

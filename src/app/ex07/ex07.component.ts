import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-ex07',
  standalone: true,
  imports: [
    NgForOf, FormsModule
  ],
  templateUrl: './ex07.component.html',
  styleUrl: './ex07.component.css'
})
export class Ex07Component {
  numbers: number[] = [];
  fruits: string[] = [];
  sortOrderFruits: string = 'asc';
  sortOrderNum: string = 'asc';

  ngOnInit(): void {
    this.numbers = [1, 5, 8, 24, 32, 11, 55];
    this.fruits = ["pear", "apple", "mango", "watermelon", "kiwi"];
  }

  sortListFruits() {
    if (this.sortOrderFruits === 'asc') {
      this.fruits.sort((a, b) => a.localeCompare(b));
    } else {
      this.fruits.sort((a, b) => b.localeCompare(a));
    }
  }

  sortListNum() {
    if (this.sortOrderNum === 'asc') {
      this.numbers.sort((a, b) => a - b);
    } else {
      this.numbers.sort((a, b) => b - a);
    }
  }
}

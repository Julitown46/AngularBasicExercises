import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-ex08',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './ex08.component.html',
  styleUrl: './ex08.component.css'
})
export class Ex08Component {
  numbers: number[] = [1, 5, 8, 24, 32, 11, 55];
  fruits: string[] = ["pear", "apple", "mango", "watermelon", "kiwi"];

  num: number = 0;
  fruit: string = '';

  insNumber() {
    this.numbers.push(this.num);
    this.num = 0;
  }

  insFruit() {
    this.fruits.push(this.fruit);
    this.fruit = '';
  }
}

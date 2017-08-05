import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  numbers = [1,2,3,4,5];
  oddNums = [1,3,5];
  evenNums = [2,4];
  oddNumbers = false;

  constructor() { }

  ngOnInit() {
  }

}

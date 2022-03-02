import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count:number=0;

  increaseValue(){
    this.count++;
  }

  decreaseValue(){
    this.count--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

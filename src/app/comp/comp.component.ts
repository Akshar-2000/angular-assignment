import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {

  @Output() newTaskEvent=new EventEmitter<string>();

  addNewTask(value:string){
    this.newTaskEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

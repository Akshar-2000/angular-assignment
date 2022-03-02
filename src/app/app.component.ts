import { Component, OnInit } from '@angular/core';
import { ServiceTestService } from './service-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'session';
  tasks=['Task1','Work'];
  todayDate:any

  addTask(newItem:string){
    this.tasks.push(newItem);
  }

  constructor(private myservice:ServiceTestService){}

  ngOnInit(): void {
    this.todayDate=this.myservice.showDate();
  }
}

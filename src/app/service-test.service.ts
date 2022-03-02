import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {

  constructor() { }
  showDate(){
    let tempDate=new Date();
    return tempDate;
  }
}

import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service'
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

public result : any = [];

  constructor(private _listService: ListService) { }

  currentVal="";
  currentVal2="";
  getVal(val:any){
    console.warn(val)
    this.currentVal=val;
  }
  getVal2(val:any){
    console.warn(val)
    this.currentVal2=val;
  }

  ngOnInit() {
      this._listService.getList().subscribe(data => this.result = data);
  }

}

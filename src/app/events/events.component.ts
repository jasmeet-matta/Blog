import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { PostService } from '../post.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

public result : any = [];

  allUser:any;
  constructor(private PostService:PostService) { }

  // currentVal="";
  // currentVal2="";
  // getVal(val:any){
  //   console.warn(val)
  //   this.currentVal=val;
  // }
  // getVal2(val:any){
  //   console.warn(val)
  //   this.currentVal2=val;
  // }

  addUser(formObj:any){
    console.log(formObj)
    this.PostService.createUser(formObj).subscribe((response)=>{
      this.getLatestUser();
    })
  }

  getLatestUser(){
    this.PostService.getAllUsers().subscribe((response)=>{
      this.allUser = response
    })
  }

  ngOnInit() {
      this.getLatestUser();
  }

}

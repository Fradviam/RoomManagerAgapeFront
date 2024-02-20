import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-show-rooms',
  templateUrl: './show-rooms.component.html',
  styleUrls: ['./show-rooms.component.css']
})
export class ShowRoomsComponent implements OnInit {


  constructor(public fb:FormBuilder) { }

  roomstatus: boolean[] = [true,false,true,true,false,true,false];

  formSencilla!:FormGroup;

  ngOnInit(): void {

    this.formSencilla = this.fb.group({
      sroom1:[''],
      sroom2:[''],
      sroom3:[''],
      sroom4:[''],
      sroom5:[''],
      sroom6:[''],
      sroom7:['']


    })

    this.updateRooms()


  }


  ReserveSen()
  {
    const body = this.formSencilla.value;

    console.log(body);
  }

  updateRooms(){

    console.log(this.roomstatus[2]);

    this.formSencilla.setValue({
      sroom1:this.roomstatus[0],
      sroom2:this.roomstatus[1],
      sroom3:this.roomstatus[2],
      sroom4:this.roomstatus[3],
      sroom5:this.roomstatus[4],
      sroom6:this.roomstatus[5],
      sroom7:this.roomstatus[6],

    })
  }



}



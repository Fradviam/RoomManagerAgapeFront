import { Component, OnInit } from '@angular/core';
import {ReservationsService} from "../../../services/reservations.service";
import {FormBuilder} from "@angular/forms";
import {reservation} from "../../../../../interfaces/interface";
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-roomstats',
  templateUrl: './roomstats.component.html',
  styleUrls: ['./roomstats.component.css']
})
export class RoomstatsComponent implements OnInit {

  ActiveReservations:reservation[]= [];
  TotalRows!:number;
  page:number=1;
  page2:number= 1;
  sizeRows='1';

  constructor(private ReservaService:ReservationsService,
              private fb:FormBuilder,
              private datePipe:DatePipe
  ) { }

  ngOnInit(): void {

    this.getReserveations();



  }


  getReserveations() {
    this.ReservaService.GetAllreservations().subscribe(res => {

      //falta el login
      if(res.code == 200){

        this.ActiveReservations = res.data;


      }
      else{
        console.log("Ha ocurrido un error contactar al administrador",2000,'#ef233c');
      }
    })
  }
  /*else {
  this.alertService.showAlert('Debe de iniciar sesion para poder usar el sistema', 2000, '#ef233c');
}*/





}

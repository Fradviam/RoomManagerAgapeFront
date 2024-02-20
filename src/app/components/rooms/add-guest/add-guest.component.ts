import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {format, differenceInHours, parse, add, set} from 'date-fns';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css']
})
export class AddGuestComponent implements OnInit {

  constructor(public fb: FormBuilder) { }
  horaSeleccionada: string = '';
  FaddRoom!:FormGroup
  horaObj: string = '12:00';
  horasRes: number | undefined;

  ngOnInit(): void {
    this.FaddRoom = this.fb.group({
      name : ['',Validators.required],
      id:['',Validators.required],
      phone: ['',Validators.required],
      checkIn: ['',Validators.required],
      checkOut: ['',Validators.required],
      roomType: ['',Validators.required],
      NumGuest: ['',Validators.required],
      NumKids: ['',Validators.required],
      Notes: ['',Validators.required]

    })




  }
  calcularHorasRestantes(): void {
// Supongamos que this.checkOut es el valor del input datetime
    const checkOutDateTime = this.FaddRoom.get('checkIn')!.value;
    console.log(checkOutDateTime);
    if (checkOutDateTime) {
      // Parsear el valor del input datetime
      const checkOutDate = new Date(checkOutDateTime);

      // Obtener la fecha y hora objetivo a las 12:00 PM del siguiente día
      const horaObjetivoDate = set(add(checkOutDate, { days: 1 }), { hours: 12, minutes: 0, seconds: 0, milliseconds: 0 });

      // Calcular la diferencia en horas
      this.horasRes = differenceInHours(horaObjetivoDate, checkOutDate);
    }

    console.log(this.horasRes);
  }

  checkout(){
    const fechaSeleccionada = this.FaddRoom.get('checkOut')!.value;

    console.log('Fecha seleccionada:', fechaSeleccionada);
    let Horas_res = fechaSeleccionada
    console.log('Before:\t', Horas_res.toLocaleString())


  }


}

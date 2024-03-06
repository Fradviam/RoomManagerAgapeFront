import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {reservation} from "../../../interfaces/interface";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  private url = environment.Url;
  constructor(private http:HttpClient) { }


  //listar Reservaciones

  GetActivereservations():Observable<any>{
    return this.http.get(this.url+'/reservations/list');
}
  GetAllreservations():Observable<any>{
    console.log(this.url)
    return this.http.get(this.url+'reservations/list/all');

  }

  listReservationbyDate(date1:string,date2:string):Observable<any>{
    return this.http.get(this.url +'/caso/list/complete'+ '/' + date1 + '/' + date2);
  }


}

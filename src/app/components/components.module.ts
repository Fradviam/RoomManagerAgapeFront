import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { LoginComponent } from './login/login.component';
import { RoomstatsComponent } from './rooms/roomstats/roomstats.component';
import { AddGuestComponent } from './rooms/add-guest/add-guest.component';
import { ShowRoomsComponent } from './rooms/show-rooms/show-rooms.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "./shared/shared.module";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    LoginComponent,
    RoomstatsComponent,
    AddGuestComponent,
    ShowRoomsComponent
  ],
  exports: [
    LoginComponent,
    AddGuestComponent,

  ],
    imports: [
        CommonModule,
        ComponentsRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        NgxPaginationModule,


    ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddGuestComponent} from "./rooms/add-guest/add-guest.component";
import {RoomstatsComponent} from "./rooms/roomstats/roomstats.component";
import {ShowRoomsComponent} from "./rooms/show-rooms/show-rooms.component";

const routes: Routes = [

  {

    path: '',
    children:[
      { path: '',component: LoginComponent},
      { path: 'add/guest',component:AddGuestComponent},
      { path: 'list/rooms',component:ShowRoomsComponent},
      { path: 'stats/rooms',component:RoomstatsComponent},


      { path: '**',redirectTo:'',pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }

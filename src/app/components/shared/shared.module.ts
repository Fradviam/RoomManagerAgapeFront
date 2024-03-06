import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ClockComponent } from './clock/clock.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ClockComponent
  ],
    exports: [
        HeaderComponent,
        ClockComponent
    ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

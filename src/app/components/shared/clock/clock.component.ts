import { Component, OnInit } from '@angular/core';
import {interval, Observable, Subscription} from "rxjs";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  currentTime: string = '';
  currentDate: string = '';
  private timerSubscription: Subscription | undefined;

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.startClock();
  }

  ngOnDestroy(): void {
    this.stopClock();
  }

  private startClock(): void {
    const timer: Observable<number> = interval(1000);
    this.timerSubscription = timer.subscribe(() => {
      this.updateTime();
    });
  }

  private stopClock(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  private updateTime(): void {
    const now: Date = new Date();
    this.currentTime = this.formatTime(now);
    this.currentDate = this.datePipe.transform(now, 'EEEE, MMMM d, y') || '';
  }
  private formatTime(date: Date): string {
    let hours: number | string = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12 in 12-hour clock format

    const minutes: number | string = date.getMinutes();
    const minutesString: string = minutes < 10 ? '0' + minutes : minutes.toString();

    return `${hours}:${minutesString} ${ampm}`;
  }


}

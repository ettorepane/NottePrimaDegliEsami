import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CountdownConfig } from 'ngx-countdown';

const CountdownTimeUnits: Array<[string, number]> = [
  ['Y', 1000 * 60 * 60 * 24 * 365], // years
  ['M', 1000 * 60 * 60 * 24 * 30], // months
  ['D', 1000 * 60 * 60 * 24], // days
  ['H', 1000 * 60 * 60], // hours
  ['m', 1000 * 60], // minutes
  ['s', 1000], // seconds
  ['S', 1], // million seconds
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NottePrimaDegliEsami';
  //format Days,Hours,Minutes,Seconds,Milliseconds


  config: CountdownConfig = {
    leftTime: 3603,
    format: 'MM:dd:HH:mm:ss'
  };
  //on init
  ngOnInit() {
    //get time in seconds left from the exam,
    // it is at hour 09:00:00 the 21 of June 2023
    const examDate = new Date(2023, 5, 21, 8, 30, 0);
    const now = new Date();
    const timeLeft = (examDate.getTime() - now.getTime()) / 1000;
    this.config.leftTime = timeLeft;
  }

}

import { Component } from '@angular/core';
import { DayNavComponent } from '../day-nav/day-nav.component';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-val-day',
  imports: [DayNavComponent, LottieComponent],
  templateUrl: './val-day.component.html',
  styleUrl: './val-day.component.css'
})
export class ValDayComponent {
  heartOptions: AnimationOptions = {
    path: '/images/heartsflying.json',
    autoplay: true,
    loop: true
  };
}

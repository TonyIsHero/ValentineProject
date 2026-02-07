import { Component } from '@angular/core';
import { DayNavComponent } from '../day-nav/day-nav.component';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-promise',
  imports: [DayNavComponent, LottieComponent],
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.css'
})
export class PromiseComponent {
  heartOptions: AnimationOptions = {
    path: '/images/heartsflying.json',
    autoplay: true,
    loop: true
  };
}

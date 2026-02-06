import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { getCurrentKey } from './valentine-days';
@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.router.url === '/home' || this.router.url === '/home/') {
      const key = getCurrentKey(new Date());
      this.router.navigate([key], { relativeTo: this.route });
    }
  }
}

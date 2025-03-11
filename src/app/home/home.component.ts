import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImportantBookingInfoComponent } from '../shared/components/important-booking-info/important-booking-info.component';
import { TipsComponent } from '../tips/tips.component';
import { ParksListComponent } from '../parks-list/parks-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ImportantBookingInfoComponent, TipsComponent, ParksListComponent],
  standalone: true
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.scrollToTop();
  }

  cancelPass(): void {
    this.router.navigate(['./pass-lookup']);
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}

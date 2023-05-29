import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  number: number = 150;
  text: string = 'New orders';
  href: string = '/';
  class: string = 'bg-info small-box';
  icon: string = 'ion-bag';
}

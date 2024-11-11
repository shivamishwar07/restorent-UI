import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('1s ease-in')]),
    ]),
    trigger('slideInRight', [
      state('void', style({ transform: 'translateX(100%)' })),
      transition(':enter', [animate('1s ease-out')]),
    ]),
  ],
})
export class ReservationTableComponent {

}

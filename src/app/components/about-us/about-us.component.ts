import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  services: any = [
    { name: 'Online order', icon: 'calender.png', width: '40px', height: '40px' },
    { name: 'Pre-Reservation', icon: 'pre-reservation.png', width: '50px', height: '50px' },
    { name: '24/7 Service', icon: 'service.png', width: '50px', height: '50px' },
    { name: 'Organized foodie place', icon: 'foodie.png', width: '40px', height: '40px' },
    { name: 'Clean Kitchen', icon: 'clean-kitchen.png', width: '40px', height: '40px' },
    { name: 'Super Chefs', icon: 'super-chefs.png', width: '40px', height: '40px' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

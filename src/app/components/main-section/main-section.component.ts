import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('600ms ease-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ transform: 'translateX(-100%)' }))
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class MainSectionComponent {
  isMenuOpen: boolean = false;

  tabs = [
    { label: 'About Us', link: '#about' },
    { label: 'Menu', link: '#menu' },
    { label: 'Reviews', link: '#reviews' },
    { label: 'Contacts', link: '#contacts' },
    { label: 'Reverse Sections', link: '#reverse-sections' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
}

import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
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
export class NavBarComponent {
  isMenuOpen: boolean = false;

  tabs = [
    { label: 'About Us', link: 'about' },
    { label: 'Menu', link: 'menu' },
    { label: 'Reviews', link: 'reviews' },
    { label: 'Blog', link: 'blog' },
    { label: 'Contacts', link: 'contacts' }
  ];


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  activeTab: string = '';
  selectActiveTab(tab: string) {
    this.activeTab = tab;
    console.log(this.activeTab);
    
  }

}

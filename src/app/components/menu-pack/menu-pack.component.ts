import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-pack',
  templateUrl: './menu-pack.component.html',
  styleUrls: ['./menu-pack.component.scss'],
  animations: [
    trigger('menuItemAnimation', [
      transition('* => *', [
        // Initial state of all items
        query('.menu-card', style({ opacity: 0, transform: 'scale(0.8)' }), { optional: true }),
        // Stagger animation for items
        query('.menu-card', stagger('150ms', [
          animate('600ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
        ]), { optional: true })
      ])
    ]),
    trigger('buttonClickAnimation', [
      transition('* => *', [
        style({ transform: 'scale(1.1)' }),
        animate('300ms ease-out', style({ transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class MenuPackComponent {

  categories: string[] = ['Special food', 'Mexican', 'Italian', 'Japanese', 'Lunch', 'More items'];
  selectedCategory: string = 'Italian'; // Default category

  menuItems = [
    { name: 'Pasta', image: 'pasta.png', category: 'Italian', price: 35.00, rating: 5, description: 'Delicious Italian pasta.' },
    { name: 'French Fries', image: 'french-fries.png', category: 'Italian', price: 10.00, rating: 4, description: 'Crispy fries with dipping sauce.' },
    { name: 'French Fries', image: 'french-fries.png', category: 'Italian', price: 10.00, rating: 4, description: 'Crispy fries with dipping sauce.' },
    { name: 'French Fries', image: 'french-fries.png', category: 'Italian', price: 10.00, rating: 4, description: 'Crispy fries with dipping sauce.' },
    { name: 'Chiken Shuwarma', image: 'shawarma.png', category: 'Italian', price: 20.00, rating: 4, description: 'Delicious chicken wrap.' },
    { name: 'Fish Curry', image: 'fish-curry.png', category: 'Japanese', price: 30.00, rating: 5, description: 'Flavorful fish curry.' },
    { name: 'Pasta', image: 'pasta.png', category: 'Special food', price: 35.00, rating: 5, description: 'Delicious pasta.' },
    { name: 'French Fries', image: 'french-fries.png', category: 'Mexican', price: 10.00, rating: 4, description: 'Crispy fries.' },
    // Add more items as per the categories
  ];

  filteredMenuItems: any = [];

  ngOnInit(): void {
    this.filterMenuItems();
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.filterMenuItems();
  }

  filterMenuItems() {
    this.filteredMenuItems = this.menuItems.filter(item => item.category === this.selectedCategory);
  }

  getStars(rating: number) {
    return new Array(rating);
  }
}

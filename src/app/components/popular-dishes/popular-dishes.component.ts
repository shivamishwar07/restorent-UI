import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-dishes',
  templateUrl: './popular-dishes.component.html',
  styleUrls: ['./popular-dishes.component.scss'],
  animations: [
    trigger('slideAnimation', [
      state('left', style({ transform: 'translateX(-100%)' })),
      state('right', style({ transform: 'translateX(100%)' })),
      state('center', style({ transform: 'translateX(0)' })),
      transition('left <=> center', animate('300ms ease-in-out')),
      transition('right <=> center', animate('300ms ease-in-out')),
    ])
  ]
})
export class PopularDishesComponent {
  popularDishes: any = [
    { name: 'Pasta', rating: 4, description: 'Worem ipsum dolor sit amet.', price: 35, image: '../../../assets/img/pasta.png' },
    { name: 'French Fries', rating: 4, description: 'Worem ipsum dolor sit amet.', price: 10, image: '../../../assets/img/french-fries.png' },
    { name: 'Chicken Shawarma', rating: 4, description: 'Worem ipsum dolor sit amet.', price: 20, image: '../../../assets/img/shawarma.png' },
    { name: 'Fish Curry', rating: 5, description: 'Worem ipsum dolor sit amet.', price: 30, image: '../../../assets/img/fish-curry.png', objWidthCover: false },
    { name: 'Burger', rating: 4, description: 'Worem ipsum dolor sit amet.', price: 15, image: '../../../assets/img/bugger.png' },
    { name: 'Salad', rating: 3, description: 'Worem ipsum dolor sit amet.', price: 8, image: '../../../assets/img/salad.png' },
    { name: 'Sushi', rating: 5, description: 'Worem ipsum dolor sit amet.', price: 50, image: '../../../assets/img/sushi.png' },
    { name: 'Tacos', rating: 4, description: 'Worem ipsum dolor sit amet.', price: 12, image: '../../../assets/img/tacos.png', width: '82%', objWidthCover: false },
    { name: 'Pizza', rating: 5, description: 'Worem ipsum dolor sit amet.', price: 45, image: '../../../assets/img/pizza.png', objWidthCover: false },
    { name: 'Noodles', rating: 4, description: 'Worem ipsum dolor sit amet.', price: 20, image: '../../../assets/img/noodels.png', objWidthCover: false }
  ];

  currentIndex = 0;
  itemsPerPage = 4;
  slideDirection: 'left' | 'right' | 'center' = 'center';

  get displayedDishes() {
    return this.popularDishes.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
  }

  next() {
    if (this.currentIndex + this.itemsPerPage < this.popularDishes.length) {
      this.currentIndex += this.itemsPerPage;
    }
  }

  prev() {
    if (this.currentIndex - this.itemsPerPage >= 0) {
      this.currentIndex -= this.itemsPerPage;
    }
  }
  onAnimationDone() {
    this.slideDirection = 'center';
  }
}

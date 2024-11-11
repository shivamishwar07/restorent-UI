import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('0.5s ease-in')]),
      transition(':leave', [animate('0.5s ease-out')]),
    ]),
  ],
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: "Emily Smith",
      message: "The food here is amazing! The flavors are authentic, and the presentation is beautiful. Definitely coming back!",
      image: "../../../assets/img/emily_smith.png",
      gender: "female"
    },
    {
      name: "Michael Johnson",
      message: "I had a wonderful experience. The service was top-notch, and the ambiance made the evening perfect.",
      image: "../../../assets/img/michael_johnsen.png",
      gender: "male"
    },
    {
      name: "Sophie Müller",
      message: "The best dining experience I've had in years. The dishes were creative and absolutely delicious!",
      image: "../../../assets/img/sophie_muller.png",
      gender: "female"
    },
    {
      name: "David Wilson",
      message: "Excellent food and a fantastic atmosphere. A must-visit for anyone who loves great cuisine.",
      image: "../../../assets/img/david_wilson.png",
      gender: "male"
    },
    {
      name: "Isabella Rossi",
      message: "I’m so glad we discovered this place. The variety of dishes is incredible, and each one is better than the last!",
      image: "../../../assets/img/isabella_rossi.png",
      gender: "female"
    },
    // {
    //   name: "John O'Connor",
    //   message: "The flavors and creativity behind the dishes were beyond my expectations. Truly a culinary masterpiece.",
    //   image: "https://example.com/image6.jpg",
    //   gender: "male"
    // },
    // {
    //   name: "Amelia Dupont",
    //   message: "Delicious food and lovely presentation. The staff were also super friendly and attentive!",
    //   image: "https://example.com/image7.jpg",
    //   gender: "female"
    // },
    // {
    //   name: "Oliver Kim",
    //   message: "This place is a hidden gem! The food was spectacular, and I was impressed with the diverse menu options.",
    //   image: "https://example.com/image8.jpg",
    //   gender: "male"
    // },
    // {
    //   name: "Victoria Jensen",
    //   message: "Absolutely loved the ambiance here. The food was excellent, and the service was quick and friendly.",
    //   image: "https://example.com/image9.jpg",
    //   gender: "female"
    // },
    // {
    //   name: "Liam Kowalski",
    //   message: "An unforgettable dining experience! Each dish was carefully crafted and full of flavor.",
    //   image: "https://example.com/image10.jpg",
    //   gender: "male"
    // },
    // {
    //   name: "Elena Petrova",
    //   message: "The food was so flavorful, and the atmosphere was warm and inviting. Can't wait to come back!",
    //   image: "https://example.com/image11.jpg",
    //   gender: "female"
    // },
    // {
    //   name: "Jacob Martinez",
    //   message: "One of the best restaurants I’ve been to in a long time. Everything was perfect, from the food to the service.",
    //   image: "https://example.com/image12.jpg",
    //   gender: "male"
    // }
  ];

  visibleTestimonials: any = [];
  currentIndex = 0;
  isNextDisabled = false;
  isPrevDisabled = true;

  constructor() {
    this.showVisibleTestimonials();
    this.updateButtonStates();
  }

  showVisibleTestimonials() {
    this.visibleTestimonials = this.testimonials.slice(this.currentIndex, this.currentIndex + 3);
    this.updateButtonStates();
  }

  nextTestimonial() {
    if (this.currentIndex + 3 < this.testimonials.length) {
      this.currentIndex++;
      this.showVisibleTestimonials();
    }
  }

  prevTestimonial() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.showVisibleTestimonials();
    }
  }

  updateButtonStates() {
    const totalTestimonials = this.testimonials.length;

    // Disable the "Next" button if we reach the end of the testimonials list
    this.isNextDisabled = this.currentIndex + 3 >= totalTestimonials;

    // Disable the "Previous" button if we are at the start of the testimonials list
    this.isPrevDisabled = this.currentIndex === 0;

    // If there are exactly 3 testimonials, both buttons should be disabled
    if (totalTestimonials <= 3) {
      this.isNextDisabled = true;
      this.isPrevDisabled = true;
    }
  }

  leftDisabled() { }
  rightDisabled() {
    if (this.testimonials.length > 3) {
      return true;
    }
    return false;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-head-section',
  templateUrl: './head-section.component.html',
  styleUrls: ['./head-section.component.scss']
})
export class HeadSectionComponent {
  activeTab: string = 'dessert';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}

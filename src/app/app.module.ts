import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeadSectionComponent } from './components/head-section/head-section.component';
import { PopularDishesComponent } from './components/popular-dishes/popular-dishes.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MenuPackComponent } from './components/menu-pack/menu-pack.component';
import { ReservationTableComponent } from './components/reservation-table/reservation-table.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MainSectionComponent,
    HeadSectionComponent,
    PopularDishesComponent,
    AboutUsComponent,
    MenuPackComponent,
    ReservationTableComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule, 
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopInfoBandComponent } from './home/top-info-band/top-info-band.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { CarouselComponent } from './home/carousel/carousel.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from './shared/shared.module';
import { AboutUsSectionComponent } from './home/about-us-section/about-us-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopInfoBandComponent,
    NavBarComponent,
    CarouselComponent,
    AboutUsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

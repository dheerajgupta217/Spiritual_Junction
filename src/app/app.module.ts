import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DropdownModule} from 'primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PromoVideoSectionComponent } from './components/promo-video-section/promo-video-section.component';

@NgModule({
  declarations: [
    AppComponent,
    PromoVideoSectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

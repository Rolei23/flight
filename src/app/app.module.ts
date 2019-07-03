import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from '@angular/forms'
import {FormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';
import { BookingComponent } from './booking/booking.component';
import { CheckInComponent } from './check-in/check-in.component';
import { ContactComponent } from './contact/contact.component';
import { DataComponent } from './data/data.component';
import { FlightsComponent } from './flights/flights.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    AboutComponent,
    HomeComponent,
   ServicesComponent,
   BookingComponent,
   CheckInComponent,
   ContactComponent,
   DataComponent,
   FlightsComponent,
   InfoComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

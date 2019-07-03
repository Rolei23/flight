import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { BookingComponent } from './booking/booking.component';
import { CheckInComponent } from './check-in/check-in.component';
import { FlightsComponent } from './flights/flights.component';

const routes: Routes = [{path:"", component:MenuComponent,children:[{path:"login", component:LoginComponent},
{path:"home", component:HomeComponent},
{path:"flight",component:FlightsComponent},
{path:"about", component:AboutComponent},
{path:"contact", component:ContactComponent},
{path:"services", component:ServicesComponent},
{path:"booking", component:BookingComponent}]},{path:"check-in", component:CheckInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightsComponent } from "./flights/flights.component"
import { FlightDetailComponent } from './flight-detail/flight-detail.component';


const routes: Routes = [
  { path: "app-flights", component: FlightsComponent },
  { path: "app-flights/:id", component: FlightDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

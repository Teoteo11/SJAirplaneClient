import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UsersComponent } from "./components/users/users.component";
import { UsersDetailComponent } from "./components/users-detail/users-detail.component";
import { PrenotationComponent } from "./components/prenotation/prenotation.component";
import { DashboardComponent } from "./components/admin/dashboard/dashboard.component";
import { DetailFlightComponent } from "./detail-flight/detail-flight.component";
import { BookingFormComponent } from './components/booking-form/booking-form.component';

const routes: Routes = [
  { path: '', component: BookingFormComponent },
  { path: 'login', component: DashboardComponent },
  { path: 'prenotation', component: PrenotationComponent }, 
  { path: "prenotation/:departure/:destination/:checkIn/:checkOut/:numSeats", component: PrenotationComponent },
  { path: "prenotation/:departure/:checkIn/:numSeats", component: PrenotationComponent },
  { path: "app-users", component: UsersComponent },
  { path: "app-users/:id", component: UsersDetailComponent },
  { path: "detailFlight/:id", component: DetailFlightComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

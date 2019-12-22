import { UsersComponent } from "./users/users.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FlightsComponent } from "./flights/flights.component";
import { FlightDetailComponent } from "./flight-detail/flight-detail.component";
import { UsersDetailComponent } from "./users-detail/users-detail.component";

const routes: Routes = [
  { path: "app-flights", component: FlightsComponent },
  { path: "app-flights/:id", component: FlightDetailComponent },
  { path: "app-users", component: UsersComponent },
  { path: "app-users/:id", component: UsersDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

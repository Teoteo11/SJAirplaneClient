import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FlightsComponent } from "./flights/flights.component";
import { FlightDetailComponent } from "./flight-detail/flight-detail.component";
import { UsersComponent } from "./users/users.component";
import { UsersDetailComponent } from './users-detail/users-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    FlightDetailComponent,
    UsersComponent,
    UsersDetailComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

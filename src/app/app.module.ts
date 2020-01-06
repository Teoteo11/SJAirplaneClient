import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { UsersDetailComponent } from "./components/users-detail/users-detail.component";
import { BackoffComponent } from "./components/backoff/backoff.component";
import { PrenotationComponent } from "./components/prenotation/prenotation.component";
import { UsersComponent } from "./components/users/users.component";
import { BookingFormComponent } from "./components/booking-form/booking-form.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersDetailComponent,
    BackoffComponent,
    PrenotationComponent,
    BookingFormComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

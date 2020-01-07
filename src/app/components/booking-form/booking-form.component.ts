import { Component, OnInit } from "@angular/core";
import { Airport } from 'src/interfaces';
import { AirportsService } from 'src/app/services/airports.service';


@Component({
  // tslint:disable-next-line: component-selector
  selector: "booking-form",
  templateUrl: "./booking-form.component.html",
  styleUrls: ["./booking-form.component.css"]
})
export class BookingFormComponent implements OnInit {

  showBookings: boolean = true;
  airports: Array<Airport> = [];
  departure: String = null;
  destination: String = null;
  checkIn: Date = null;
  checkOut: Date = null;
  numSeats: Number;


  constructor(public aiportService: AirportsService) { }

  async ngOnInit() {
    this.airports = await this.aiportService.getAirports();
  }
}

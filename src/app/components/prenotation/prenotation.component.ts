import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Flight } from "src/interfaces";
import { FlightsService } from "../../services/flights.service";
import { AirportsService } from "src/app/services/airports.service";

@Component({
  selector: "app-prenotation",
  templateUrl: "./prenotation.component.html",
  styleUrls: ["./prenotation.component.css"]
})
export class PrenotationComponent implements OnInit {
  public flights: Array<Flight>;

  constructor(
    private activeRoute: ActivatedRoute,
    public flightsService: FlightsService,
    public airportService: AirportsService
  ) {}

  async ngOnInit() {
    const departure = this.activeRoute.snapshot.params.departure;
    const destination = this.activeRoute.snapshot.params.destination;
    const checkIn = this.activeRoute.snapshot.params.checkIn;
    const checkOut = this.activeRoute.snapshot.params.checkOut;
    const numSeats = this.activeRoute.snapshot.params.numSeats;
    if (destination && checkOut) {
      this.flights = (await this.flightsService.getFlightsByDestination(
        departure,
        checkIn,
        Number(numSeats),
        destination,
        checkOut
      )) as any;
    } else {
      this.flights = (await this.flightsService.getFlightsByDestination(
        departure,
        checkIn,
        Number(numSeats)
      )) as any;
    }
    for (let flight of this.flights) {
      flight.departure = (
        await this.airportService.getAirportById(flight.departure)
      ).name;
      flight.destination = (
        await this.airportService.getAirportById(flight.destination)
      ).name;
    }
  }
}

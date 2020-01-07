import { Flight } from "./../../interfaces";
import { Component, OnInit } from "@angular/core";
import { FlightsService } from "../services/flights.service";
import { ActivatedRoute } from "@angular/router";
import { AirportsService } from "../services/airports.service";

@Component({
  selector: "app-detail-flight",
  templateUrl: "./detail-flight.component.html",
  styleUrls: ["./detail-flight.component.css"]
})
export class DetailFlightComponent implements OnInit {
  flight: Flight;

  constructor(
    public flightsService: FlightsService,
    public airportService: AirportsService,
    private activeRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    const idFlight = this.activeRoute.snapshot.params.id;
    this.flight = await this.flightsService.getFlightsById(idFlight);

    this.flight.departure = (
      await this.airportService.getAirportById(this.flight.departure)
    ).name;
    this.flight.destination = (
      await this.airportService.getAirportById(this.flight.destination)
    ).name;
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { Flight } from '../modules';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent implements OnInit {

  public flight: Flight = {
    _id: "",
    duration: 0,
    departure: "",
    destination: "",
    idAirplane: 0
  };

  constructor(private activeRoute: ActivatedRoute, private flightsService: FlightsService) { }

  async ngOnInit() {
    const id = this.activeRoute.snapshot.params.id;
    this.flight = await this.flightsService.getFlightsById(id);
  }

}

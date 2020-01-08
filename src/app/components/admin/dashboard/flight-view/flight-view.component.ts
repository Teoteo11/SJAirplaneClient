import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/interfaces';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-flight-view',
  templateUrl: './flight-view.component.html',
  styleUrls: ['./flight-view.component.css']
})
export class FlightViewComponent implements OnInit {

  public flights:Flight[];

  constructor(public flightService:FlightsService) { }
  
  async ngOnInit() {
    this.flights = await this.flightService.getFlights();
  }

}

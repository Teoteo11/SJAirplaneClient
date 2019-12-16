import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../modules';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  flightsList: Flight[] = [];
  constructor(private flightService: FlightsService) {
  }

  async ngOnInit() {
    this.flightsList = await this.flightService.getFlights();
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from './modules';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private httpClient: HttpClient) { }

  async getFlights(): Promise<Flight[]> {
    return this.httpClient.get<Flight[]>("http://localhost:3002/flights").toPromise();
  }

  async getFlightsById(id: String): Promise<Flight> {
    return this.httpClient.get<Flight>(`http://localhost:3002/flights/${id}`).toPromise();
  }
}

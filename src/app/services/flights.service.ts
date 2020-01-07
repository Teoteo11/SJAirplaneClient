import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Flight } from "../../interfaces";

@Injectable({
  providedIn: "root"
})
export class FlightsService {
  constructor(private httpClient: HttpClient) {}

  async getFlights(): Promise<Flight[]> {
    return this.httpClient
      .get<Flight[]>("http://localhost:3002/flights")
      .toPromise();
  }

  async getFlightsById(id: string): Promise<Flight> {
    return this.httpClient
      .get<Flight>(`http://localhost:3002/flights/${id}`)
      .toPromise();
  }

  async getFlightsByDestination(
    departure: String,
    checkIn: Date,
    numSeats: Number,
    destination?: String,
    checkOut?: Date
  ): Promise<Flight> {
    if (destination && checkOut) {
      return this.httpClient
        .get<Flight>(
          `http://localhost:3002/flights/${departure}/${numSeats}/?destination=${destination}&checkIn=${checkIn}&checkOut=${checkOut}`
        )
        .toPromise();
    }
    return this.httpClient
      .get<Flight>(
        `http://localhost:3002/flights/${departure}/${numSeats}/?checkIn=${checkIn}`
      )
      .toPromise();
  }
}

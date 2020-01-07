import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Airport } from "./../../interfaces"

@Injectable({
  providedIn: 'root'
})
export class AirportsService {

  constructor(private httpClient: HttpClient) { }
  apiURL: string = `http://localhost:3002/airports`;

  public getAirports() {
    return this.httpClient.get<Airport[]>(`${this.apiURL}`).toPromise();
  }

  public getAirportById(id: String) {
    return this.httpClient.get<Airport>(`${this.apiURL}/${id}`).toPromise();
  }
}

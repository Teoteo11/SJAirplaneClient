export interface Ticket {
  _id?: string;
  idCompany: number;
  idFlight: number;
  isChecked: boolean;
}
export interface Airplane {
  _id?: string;
  model: string;
  numSeats: number;
}
export interface User {
  _id?: string;
  username: string;
  name: string;
  surname: string;
  tickets: Array<Ticket>;
}
export interface Flight {
  _id?: string;
  departure: String;
  destination: String;
  duration: number;
  price: number;
  idAirplane: number;
}
export interface Route {
  _id?: string;
  placeDeparture: string;
  placeDestination: string;
}
export interface Company {
  _id?: string;
  name: string;
  airplanes: Array<Airplane>;
  routes: Array<Route>;
  maxAirplanes: number;
}

export interface Airport {
  id?: String;
  city: String;
  country: String;
  name: String;
}
